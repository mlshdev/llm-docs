> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secgrouptransformgettypeid()](https://developer.apple.com/documentation/security/secgrouptransformgettypeid())

# SecGroupTransformGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns the Core Foundation type ID for a transform group container.

> SecTransform is no longer supported

## Declaration

```swift
func SecGroupTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecGroupTransform](secgrouptransform.md) object.

# SecGroupTransformGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns the Core Foundation type ID for a transform group container.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeID SecGroupTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecGroupTransformRef](secgrouptransform.md) object.
