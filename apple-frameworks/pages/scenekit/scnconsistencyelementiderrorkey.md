> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnconsistencyelementiderrorkey](https://developer.apple.com/documentation/scenekit/scnconsistencyelementiderrorkey)

# SCNConsistencyElementIDErrorKey (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The identifier of the scene file element where the error occurred.

## Declaration

```swift
let SCNConsistencyElementIDErrorKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [NSString](../foundation/nsstring.md) object containing an identifier.

If the element in which the error occurred does not have an identifier, the value for this key is the identifier of the closest parent element with an identifier.

## See Also

### Constants

- [SCNConsistencyElementTypeErrorKey](scnconsistencyelementtypeerrorkey.md): The type of scene file element in which the error occurred.
- [SCNConsistencyLineNumberErrorKey](scnconsistencylinenumbererrorkey.md): The line number in the scene file in which the error occurred.

# SCNConsistencyElementIDErrorKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The identifier of the scene file element where the error occurred.

## Declaration

```objectivec
extern NSString * const SCNConsistencyElementIDErrorKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [NSString](../foundation/nsstring.md) object containing an identifier.

If the element in which the error occurred does not have an identifier, the value for this key is the identifier of the closest parent element with an identifier.

## See Also

### Constants

- [SCNConsistencyElementTypeErrorKey](scnconsistencyelementtypeerrorkey.md): The type of scene file element in which the error occurred.
- [SCNConsistencyLineNumberErrorKey](scnconsistencylinenumbererrorkey.md): The line number in the scene file in which the error occurred.
