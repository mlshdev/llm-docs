> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/nomination](https://developer.apple.com/documentation/appstoreconnectapi/nomination)

# Nomination

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

A developer recommendation submitted to Apple proposing an app or in-app event for App Store editorial featuring.

## Declaration

```
object Nomination
```

## Properties

- `attributes` — `Nomination.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `Nomination.Relationships`:
- `type` — `string` (required): **Allowed values:** `nominations`

## Topics

### Dictionaries

- [Nomination.Attributes](nomination/attributes-data.dictionary.md)
- [Nomination.Relationships](nomination/relationships-data.dictionary.md)

## See Also

### Objects

- [NominationUpdateRequest](nominationupdaterequest.md): The request body you use to update a featuring nomination.
- [NominationCreateRequest](nominationcreaterequest.md): The request body you use to create a featuring nomination.
- [NominationResponse](nominationresponse.md): A response containing a single App Store nomination submission.
- [NominationsResponse](nominationsresponse.md): A response containing a list of app nominations submitted for App Store editorial featuring consideration.
