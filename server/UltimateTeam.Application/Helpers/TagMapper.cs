using System;
using System.Collections.Generic;
using UltimateTeam.Domain.Models;

namespace UltimateTeam.Application.Helpers
{
    public static class TagMapper
    {
        public static List<Tag> GetTags(string tags, Guid informationId)
        {
            var tagsList = new List<Tag>();

            if (string.IsNullOrEmpty(tags))
            {
                return tagsList;
            }

            var tagArray = tags.Split(new[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);

            foreach (var tag in tagArray)
            {
                tagsList.Add(new Tag { Name = tag, InformationId = informationId, Id = Guid.NewGuid() });
            }

            return tagsList;
        }



        public static List<string> Map(IEnumerable<Tag> tags)
        {
            var tagsList = new List<string>();

            foreach (var tag in tags)
            {
                tagsList.Add(tag.Name);
            }

            return tagsList;
        }
    }
}