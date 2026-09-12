> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/sandboxtestersclearpurchasehistoryrequestv2](https://developer.apple.com/documentation/appstoreconnectapi/sandboxtestersclearpurchasehistoryrequestv2)

# SandboxTestersClearPurchaseHistoryRequestV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.2+

A batch request to reset the in-app purchase and subscription history for one or more sandbox Apple IDs.

## Declaration

```
object SandboxTestersClearPurchaseHistoryRequestV2
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `sandboxTestersClearPurchaseHistoryRequest`

## See Also

### Objects

- [SandboxTesterV2Response](sandboxtesterv2response.md): The response body for endpoints that read or modify a single sandbox Apple ID for testing.
- [SandboxTesterV2UpdateRequest](sandboxtesterv2updaterequest.md): The request body you use to update a sandbox tester v2update request.
- [SandboxTestersClearPurchaseHistoryRequestV2CreateRequest](sandboxtestersclearpurchasehistoryrequestv2createrequest.md): The request body you use to create a request to clear sandbox tester purchase history.
- [SandboxTestersClearPurchaseHistoryRequestV2Response](sandboxtestersclearpurchasehistoryrequestv2response.md): A response confirming that the purchase history for sandbox testers was cleared.
- [SandboxTestersV2Response](sandboxtestersv2response.md): The response body for endpoints that list sandbox Apple IDs used for testing.
- [SandboxTesterV2](sandboxtesterv2.md): A sandbox Apple ID you use to test in-app purchases and subscriptions in the Xcode sandbox environment.
