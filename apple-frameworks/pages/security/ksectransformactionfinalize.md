> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformactionfinalize](https://developer.apple.com/documentation/security/ksectransformactionfinalize)

# kSecTransformActionFinalize (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers just before deleting a custom transform to enable custom cleanup operations.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionFinalize: CFString
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that occurs just before deleting a custom transform. This is typically overridden to allow for memory clean up of a custom transform. This is used with the SecTransformOverrideTransformAction block.

# kSecTransformActionFinalize (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers just before deleting a custom transform to enable custom cleanup operations.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionFinalize;
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that occurs just before deleting a custom transform. This is typically overridden to allow for memory clean up of a custom transform. This is used with the SecTransformOverrideTransformAction block.
