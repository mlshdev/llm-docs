> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/activities/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/activities/relationships-data.dictionary)

# Activities.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for an activity resource.

## Declaration

```
object Activities.Relationships
```

## Properties

- `playlists` — `Activities.Relationships.ActivitiesPlaylistsRelationship`: The playlists associated with this activity. By default, `playlists` includes identifiers only.

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [Activities.Relationships.ActivitiesPlaylistsRelationship](relationships-data.dictionary/activitiesplaylistsrelationship.md): A relationship between the activity and its playlists.

## See Also

### Related Objects

- [Activities.Attributes](attributes-data.dictionary.md): The attributes for an activities resource.
