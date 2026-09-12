> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/activities/relationships-data.dictionary/activitiesplaylistsrelationship](https://developer.apple.com/documentation/applemusicapi/activities/relationships-data.dictionary/activitiesplaylistsrelationship)

# Activities.Relationships.ActivitiesPlaylistsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship between the activity and its playlists.

## Declaration

```
object Activities.Relationships.ActivitiesPlaylistsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Playlists]` (required): The playlists associated with this activity.
