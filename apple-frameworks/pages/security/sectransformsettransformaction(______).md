> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformsettransformaction(_:_:_:)](https://developer.apple.com/documentation/security/sectransformsettransformaction(_:_:_:))

# SecTransformSetTransformAction(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Changes the way that a transform deals with transform lifecycle behaviors.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformSetTransformAction(_ ref: SecTransformImplementationRef, _ action: CFString, _ newAction: @escaping SecTransformActionBlock) -> CFError?
```

## Parameters

- `ref`: A custom transform.
- `action`: The behavior to change. Valid values are [kSecTransformActionCanExecute](ksectransformactioncanexecute.md), [kSecTransformActionStartingExecution](ksectransformactionstartingexecution.md), [kSecTransformActionFinalize](ksectransformactionfinalize.md), or [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md).
- `newAction`: A [SecTransformActionBlock](sectransformactionblock.md) block that implements the behavior.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.

# SecTransformSetTransformAction (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Changes the way that a transform deals with transform lifecycle behaviors.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFErrorRefSecTransformSetTransformAction(SecTransformImplementationRef ref, CFStringRef action, SecTransformActionBlock newAction);
```

## Parameters

- `ref`: A custom transform.
- `action`: The behavior to change. Valid values are [kSecTransformActionCanExecute](ksectransformactioncanexecute.md), [kSecTransformActionStartingExecution](ksectransformactionstartingexecution.md), [kSecTransformActionFinalize](ksectransformactionfinalize.md), or [kSecTransformActionExternalizeExtraData](ksectransformactionexternalizeextradata.md).
- `newAction`: A [SecTransformActionBlock](sectransformactionblock.md) block that implements the behavior.

<a id="return-value"></a>

## Return Value

An error on failure, or `NULL` on success. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the error’s memory when you are done with it.
