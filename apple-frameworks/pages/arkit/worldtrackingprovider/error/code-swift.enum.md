> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/error/code-swift.enum](https://developer.apple.com/documentation/arkit/worldtrackingprovider/error/code-swift.enum)

# WorldTrackingProvider.Error.Code

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

The error codes for errors that world tracking providers throw.

## Declaration

```swift
enum Code
```

## Topics

### Determining causes for tracking failures

- [WorldTrackingProvider.Error.Code.addWorldAnchorFailed](code-swift.enum/addworldanchorfailed.md): The error code for when a world-tracking provider can’t add a world anchor.
- [WorldTrackingProvider.Error.Code.removeWorldAnchorFailed](code-swift.enum/removeworldanchorfailed.md): The error code for when a world-tracking provider can’t remove a world anchor.
- [WorldTrackingProvider.Error.Code.worldAnchorLimitReached](code-swift.enum/worldanchorlimitreached.md): The error code for when a world-tracking provider reaches its world anchor limit.

### Instance Properties

- [description](code-swift.enum/description.md): A textual representation of the code.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Inspecting world-tracking errors

- [anchor](anchor.md): The anchor that caused a world-tracking error.
- [code](code-swift.property.md): The error code.
- [errorDescription](errordescription.md): A localized message that describes the error that occurred.
