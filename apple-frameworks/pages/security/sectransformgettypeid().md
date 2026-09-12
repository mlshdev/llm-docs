> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformgettypeid()](https://developer.apple.com/documentation/security/sectransformgettypeid())

# SecTransformGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns the unique identifier of the opaque type to which a security transform object belongs.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransform](sectransform.md) object.

# SecTransformGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns the unique identifier of the opaque type to which a security transform object belongs.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFTypeID SecTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransformRef](sectransform.md) object.
