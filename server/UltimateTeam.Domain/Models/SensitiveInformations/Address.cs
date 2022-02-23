using System;

namespace UltimateTeam.Domain.Models.SensitiveInformations
{
    public class Address
    {
        public Guid Id { get; set; }

        [Display(Encrypted = true, Sensitive = false)]
        public string Location { get; set; }

        public Guid ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}