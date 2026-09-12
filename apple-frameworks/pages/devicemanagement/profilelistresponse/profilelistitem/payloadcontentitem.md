> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/profilelistresponse/profilelistitem/payloadcontentitem](https://developer.apple.com/documentation/devicemanagement/profilelistresponse/profilelistitem/payloadcontentitem)

# ProfileListResponse.ProfileListItem.PayloadContentItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that describes a profile payload content item.

## Declaration

```
object ProfileListResponse.ProfileListItem.PayloadContentItem
```

## Properties

- `PayloadDescription` — `string`: A description of the payload.
- `PayloadDisplayName` — `string`: The human-readable name of the payload.
- `PayloadIdentifier` — `string` (required): The reverse-DNS-style identifier of the payload, such as `com.example.mypayload`.
- `PayloadOrganization` — `string`: The human-readable name of the organization that provided the payload.
- `PayloadType` — `string` (required): The type of payload, such as `com.apple.wifi.managed`.
- `PayloadUUID` — `string` (required): The unique identifier of the payload.

  Available: iOS 17+ | iPadOS 17+ | macOS 14+ | tvOS 17+ | visionOS 1.1+ | watchOS 10+
- `PayloadVersion` — `integer` (required): The version of the payload. The value is `1`.
  **Allowed values:** `1`
