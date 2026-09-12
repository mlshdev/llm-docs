> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/invalidparameter](https://developer.apple.com/documentation/homekit/hmerror/invalidparameter)

# invalidParameter

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the object is invalid for the given operation.

## Declaration

```swift
static var invalidParameter: HMError.Code { get }
```

<a id="Discussion"></a>

## Discussion

For example, the home object issues an error when attempting to add a room that exists in another home.

## See Also

### Detecting parameter errors

- [missingParameter](missingparameter.md): An error indicating a missing parameter.
- [nilParameter](nilparameter.md): An error indicating that nil was passed for an operation that does not accept nil.
- [unconfiguredParameter](unconfiguredparameter.md): An error indicating an unconfigured parameter.
