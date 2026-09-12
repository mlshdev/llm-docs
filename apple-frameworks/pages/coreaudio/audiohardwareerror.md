> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareerror](https://developer.apple.com/documentation/coreaudio/audiohardwareerror)

# AudioHardwareError

**Framework:** Core Audio  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS 15.0+

Represents errors returned by the HAL

## Declaration

```swift
struct AudioHardwareError
```

## Topics

### Initializers

- [init(\_:)](audiohardwareerror/init%28__%29.md)

### Instance Properties

- [error](audiohardwareerror/error.md)
- [errorDescription](audiohardwareerror/errordescription.md): Provides localized descriptions for the error constants unique to HAL . Note that the HAL’s functions can and will return other codes that are not covered here, in which case no description is provided.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
