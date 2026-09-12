> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appevent](https://developer.apple.com/documentation/appstoreconnectapi/appevent)

# AppEvent

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

A time-limited promotional or informational event for an app, displayed to customers on the App Store product page.

## Declaration

```
object AppEvent
```

## Properties

- `attributes` — `AppEvent.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppEvent.Relationships`:
- `type` — `string` (required): **Allowed values:** `appEvents`

## Topics

### Objects

- [AppEvent.Attributes](appevent/attributes-data.dictionary.md): The attributes that describe an In-App event.
- [AppEvent.Relationships](appevent/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [AppEventCreateRequest](appeventcreaterequest.md): The request body you use to create an app event.
- [AppEventUpdateRequest](appeventupdaterequest.md): The request body you use to update an app event update request.
- [AppEventsResponse](appeventsresponse.md): The response body for endpoints that list in-app events for an app.
- [AppEventResponse](appeventresponse.md): The response body for endpoints that create, read, or modify an in-app event.
- [AppEventAssetType](appeventassettype.md): A string that represents the type of asset for an app event.
- [AppEventLocalizationsLinkagesResponse](appeventlocalizationslinkagesresponse.md)
