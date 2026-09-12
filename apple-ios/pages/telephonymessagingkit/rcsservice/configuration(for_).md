> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration(for:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration(for:))

# configuration(for:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Retrieves the RCS configuration for the specified cellular service.

## Declaration

```swift
final func configuration(for cellularServiceID: CellularServiceID) throws -> RCSService.Configuration
```

<a id="discussion"></a>

## Discussion

You can observe changes in configuration through the [viabilityNotifications](viabilitynotifications.md) asynchronous sequence. When the service becomes viable, invoke this method to retrieve updates to the RCS configuration.

## See Also

### Managing RCS configuration

- [RCSService.Configuration](configuration.md): A structure that contains RCS configuration parameters, such as timing and size limits.
