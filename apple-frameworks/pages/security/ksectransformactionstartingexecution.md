> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksectransformactionstartingexecution

# kSecTransformActionStartingExecution (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers just before starting execution of a custom transform.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformActionStartingExecution: CFString
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that occurs just before starting execution of a custom transform. This is typically overridden to allow for initialization. This is used with the SecTransformOverrideTransformAction block.

# kSecTransformActionStartingExecution (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

An action that triggers just before starting execution of a custom transform.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformActionStartingExecution;
```

<a id="Discussion"></a>

## Discussion

Overrides the standard behavior that occurs just before starting execution of a custom transform. This is typically overridden to allow for initialization. This is used with the SecTransformOverrideTransformAction block.
