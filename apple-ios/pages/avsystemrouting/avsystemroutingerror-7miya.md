> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutingerror-7miya](https://developer.apple.com/documentation/avsystemrouting/avsystemroutingerror-7miya)

# AVSystemRoutingError

**Framework:** AVSystemRouting  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An error that an AVSystemRouting operation throws when it fails.

## Declaration

```swift
struct AVSystemRoutingError
```

## Topics

### Initializers

- [init(\_:)](avsystemroutingerror-7miya/init%28__%29.md): Creates an error with the specified error code.

### Instance Properties

- [code](avsystemroutingerror-7miya/code-swift.property.md): The code that identifies the type of routing error.
- [errorDescription](avsystemroutingerror-7miya/errordescription.md): A localized description of the error.
- [failureReason](avsystemroutingerror-7miya/failurereason.md): A localized explanation of the reason for the error.
- [helpAnchor](avsystemroutingerror-7miya/helpanchor.md): A localized help anchor for the error.
- [recoverySuggestion](avsystemroutingerror-7miya/recoverysuggestion.md): A localized suggestion for how to recover from the error.

### Enumerations

- [AVSystemRoutingError.Code](avsystemroutingerror-7miya/code-swift.enum.md): The codes that identify the type of a routing error.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AVSystemRoutingError](avsystemroutingerror-19zkj.md)
