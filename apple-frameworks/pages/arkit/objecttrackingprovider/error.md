> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objecttrackingprovider/error](https://developer.apple.com/documentation/arkit/objecttrackingprovider/error)

# ObjectTrackingProvider.Error

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Values that represent an object-tracking error.

## Declaration

```swift
struct Error
```

## Topics

### Describing an error

- [code](error/code-swift.property.md): The error code.
- [ObjectTrackingProvider.Error.Code](error/code-swift.enum.md): The enumeration of object-tracking provider error codes.
- [errorDescription](error/errordescription.md): A localized message that describes an error.
- [failureReason](error/failurereason.md): A localized message that describes the reason for the failure.

### Inspecting an error

- [bundle](error/bundle.md): The bundle for the model that failed to load, if the source was a bundle.
- [name](error/name.md): The name of the model that failed to load, if the source was a bundle.
- [recoverySuggestion](error/recoverysuggestion.md): A localized message that describes how to recover from the failure.
- [url](error/url.md): The URL for the model that failed to load, if the source was a URL.

### Instance Properties

- [description](error/description.md): A textual representation of an error.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an object-tracking provider

- [state](state.md): The state of an object-tracking provider.
- [allAnchors](allanchors.md): An array of all the object anchors the object-tracking provider is tracking.
- [anchorUpdates](anchorupdates.md): An asynchronous sequence of anchors the framework updates.
- [description](description.md): A textual representation of this object tracking provider.
