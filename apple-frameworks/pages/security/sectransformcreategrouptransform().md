> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformcreategrouptransform()](https://developer.apple.com/documentation/security/sectransformcreategrouptransform())

# SecTransformCreateGroupTransform() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates an object that acts as a container for a set of connected transforms.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCreateGroupTransform() -> SecGroupTransform
```

<a id="return-value"></a>

## Return Value

A transform group object.

<a id="Discussion"></a>

## Discussion

A [SecGroupTransform](secgrouptransform.md) is a container for all of the transforms that are in a directed graph. You can use this container as you would a single transform with the [SecTransformExecute(\_:\_:)](sectransformexecute%28____%29.md), [SecTransformExecuteAsync(\_:\_:\_:)](sectransformexecuteasync%28______%29.md) and [SecTransformCopyExternalRepresentation(\_:)](sectransformcopyexternalrepresentation%28__%29.md) functions.On the other hand, unlike a stand alone transform, you can’t use a transform group with the [SecTransformConnectTransforms(\_:\_:\_:\_:\_:\_:)](sectransformconnecttransforms%28____________%29.md), [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) or [SecTransformGetAttribute(\_:\_:)](sectransformgetattribute%28____%29.md) functions. Attempting to do so produces undefined behavior.

# SecTransformCreateGroupTransform (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Creates an object that acts as a container for a set of connected transforms.

> SecTransform is no longer supported

## Declaration

```objectivec
extern SecGroupTransformRefSecTransformCreateGroupTransform();
```

<a id="return-value"></a>

## Return Value

A transform group object.

<a id="Discussion"></a>

## Discussion

A [SecGroupTransformRef](secgrouptransform.md) is a container for all of the transforms that are in a directed graph. You can use this container as you would a single transform with the [SecTransformExecute](sectransformexecute%28____%29.md), [SecTransformExecuteAsync](sectransformexecuteasync%28______%29.md) and [SecTransformCopyExternalRepresentation](sectransformcopyexternalrepresentation%28__%29.md) functions.On the other hand, unlike a stand alone transform, you can’t use a transform group with the [SecTransformConnectTransforms](sectransformconnecttransforms%28____________%29.md), [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) or [SecTransformGetAttribute](sectransformgetattribute%28____%29.md) functions. Attempting to do so produces undefined behavior.
