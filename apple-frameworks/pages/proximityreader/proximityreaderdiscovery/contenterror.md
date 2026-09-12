> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/proximityreaderdiscovery/contenterror](https://developer.apple.com/documentation/proximityreader/proximityreaderdiscovery/contenterror)

# ProximityReaderDiscovery.ContentError

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Errors that indicate a problem occurred when getting or showing content.

## Declaration

```swift
enum ContentError
```

## Topics

### Getting the errors

- [ProximityReaderDiscovery.ContentError.contentNotFound](contenterror/contentnotfound.md): An error that indicates the requested content isn’t available.
- [ProximityReaderDiscovery.ContentError.contentDisplayFailed](contenterror/contentdisplayfailed.md): An error that indicates an issue occurred when trying to display the requested content.
- [ProximityReaderDiscovery.ContentError.notSupported](contenterror/notsupported.md): An error that indicates the current device doesn’t support the requested content.
- [ProximityReaderDiscovery.ContentError.networkUnavailable](contenterror/networkunavailable.md): An error that indicates the system can’t reach the network.
- [ProximityReaderDiscovery.ContentError.systemBusy](contenterror/systembusy.md): An error that indicates the system is busy.
- [ProximityReaderDiscovery.ContentError.unknown](contenterror/unknown.md): An error that indicates the framework encountered a problem that the system can’t interpret.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
