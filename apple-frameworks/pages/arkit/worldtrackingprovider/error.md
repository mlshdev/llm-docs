> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/error](https://developer.apple.com/documentation/arkit/worldtrackingprovider/error)

# WorldTrackingProvider.Error

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An error that can occur during a world-tracking session.

## Declaration

```swift
struct Error
```

## Topics

### Inspecting world-tracking errors

- [anchor](error/anchor.md): The anchor that caused a world-tracking error.
- [code](error/code-swift.property.md): The error code.
- [WorldTrackingProvider.Error.Code](error/code-swift.enum.md): The error codes for errors that world tracking providers throw.
- [errorDescription](error/errordescription.md): A localized message that describes the error that occurred.

### Providing recovery suggestions

- [recoverySuggestion](error/recoverysuggestion.md): A localized message that describes how someone might recover from the error.
- [failureReason](error/failurereason.md): A localized message that describes why the error occurred.

### Instance Properties

- [description](error/description.md): A textual description of the error that occurred.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking objects

- [init()](init%28%29.md): Creates a world-tracking provider.
- [anchorUpdates](anchorupdates.md): A sequence of updates to anchors a provider tracks.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking world anchors.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports world-tracking providers.
- [allAnchors](allanchors.md): An array of all known world anchors from the world-tracking provider.
- [addAnchor(\_:)](addanchor%28__%29.md): Adds a world anchor you supply to the set of currently tracked anchors.
