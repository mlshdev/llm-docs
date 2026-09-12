> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/activities](https://developer.apple.com/documentation/applemusicapi/activities)

# Activities

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents an activity curator.

## Declaration

```
object Activities
```

## Properties

- `id` — `string` (required): The identifier for the activity.
- `type` — `string` (required): This value must always be `activities`.
  **Allowed values:** `activities`
- `href` — `string` (required): The relative location for the activity resource.
- `attributes` — `Activities.Attributes`: The attributes for the activity.
- `relationships` — `Activities.Relationships`: The relationships for the activity.

## Topics

### Related Objects

- [Activities.Attributes](activities/attributes-data.dictionary.md): The attributes for an activities resource.
- [Activities.Relationships](activities/relationships-data.dictionary.md): The relationships for an activity resource.

## See Also

### Handling the Response

- [ActivitiesResponse](activitiesresponse.md): The response to a request for activities.
