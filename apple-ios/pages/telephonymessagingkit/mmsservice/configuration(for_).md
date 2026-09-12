> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmsservice/configuration(for:)](https://developer.apple.com/documentation/telephonymessagingkit/mmsservice/configuration(for:))

# configuration(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Retrieves the MMS configuration for the carrier.

## Declaration

```swift
final func configuration(for cellularServiceID: CellularServiceID) async throws -> MMSService.Configuration
```

## Parameters

- `cellularServiceID`: The cellular service identifier for which to fetch the MMS configuration.

<a id="return-value"></a>

## Return Value

An [MMSService.Configuration](configuration.md) instance that describes the MMS configuration.

<a id="discussion"></a>

## Discussion

Fetch the MMS configuration when your app launches and during susbscription change events.

> **Throws**

> - [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md) if the session isn’t valid.

## See Also

### Managing MMS configuration

- [MMSService.Configuration](configuration.md): A structure that provides information about MMS messages sent and received using the current carrier.
