> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appeventresponse](https://developer.apple.com/documentation/appstoreconnectapi/appeventresponse)

# AppEventResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify an in-app event.

## Declaration

```
object AppEventResponse
```

## Properties

- `data` — `AppEvent` (required):
- `included` — `[AppEventLocalization]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects and types

- [AppEvent](appevent.md): A time-limited promotional or informational event for an app, displayed to customers on the App Store product page.
- [AppEventCreateRequest](appeventcreaterequest.md): The request body you use to create an app event.
- [AppEventUpdateRequest](appeventupdaterequest.md): The request body you use to update an app event update request.
- [AppEventsResponse](appeventsresponse.md): The response body for endpoints that list in-app events for an app.
- [AppEventAssetType](appeventassettype.md): A string that represents the type of asset for an app event.
- [AppEventLocalizationsLinkagesResponse](appeventlocalizationslinkagesresponse.md)
