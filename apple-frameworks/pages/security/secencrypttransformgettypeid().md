> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secencrypttransformgettypeid()](https://developer.apple.com/documentation/security/secencrypttransformgettypeid())

# SecEncryptTransformGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which an encryption transform belongs.

> SecTransform is no longer supported

## Declaration

```swift
func SecEncryptTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransform](sectransform.md) object meant for encryption.

# SecEncryptTransformGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which an encryption transform belongs.

> SecTransform is no longer supported

## Declaration

```objectivec
CFTypeID SecEncryptTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransformRef](sectransform.md) object meant for encryption.
