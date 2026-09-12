> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/unconfiguredparameter](https://developer.apple.com/documentation/homekit/hmerror/unconfiguredparameter)

# unconfiguredParameter

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating an unconfigured parameter.

## Declaration

```swift
static var unconfiguredParameter: HMError.Code { get }
```

## See Also

### Detecting parameter errors

- [invalidParameter](invalidparameter.md): An error indicating the object is invalid for the given operation.
- [missingParameter](missingparameter.md): An error indicating a missing parameter.
- [nilParameter](nilparameter.md): An error indicating that nil was passed for an operation that does not accept nil.
