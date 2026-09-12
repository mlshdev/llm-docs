> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/code/invalidparameter](https://developer.apple.com/documentation/homekit/hmerror/code/invalidparameter)

# HMError.Code.invalidParameter (Swift)

**Framework:** HomeKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the object is invalid for the given operation.

## Declaration

```swift
case invalidParameter
```

<a id="Discussion"></a>

## Discussion

For example, the home object issues an error when attempting to add a room that exists in another home.

## See Also

### Parameter errors

- [HMError.Code.missingParameter](missingparameter.md): An error indicating a missing parameter.
- [HMError.Code.nilParameter](nilparameter.md): An error indicating that `nil` was passed for an operation that does not accept `nil`.
- [HMError.Code.unconfiguredParameter](unconfiguredparameter.md): An error indicating an unconfigured parameter.

# HMErrorCodeInvalidParameter (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the object is invalid for the given operation.

## Declaration

```objectivec
HMErrorCodeInvalidParameter
```

<a id="Discussion"></a>

## Discussion

For example, the home object issues an error when attempting to add a room that exists in another home.

## See Also

### Parameter errors

- [HMErrorCodeMissingParameter](missingparameter.md): An error indicating a missing parameter.
- [HMErrorCodeNilParameter](nilparameter.md): An error indicating that `nil` was passed for an operation that does not accept `nil`.
- [HMErrorCodeUnconfiguredParameter](unconfiguredparameter.md): An error indicating an unconfigured parameter.
