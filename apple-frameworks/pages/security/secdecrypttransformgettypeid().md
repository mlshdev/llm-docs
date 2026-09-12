> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secdecrypttransformgettypeid()](https://developer.apple.com/documentation/security/secdecrypttransformgettypeid())

# SecDecryptTransformGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which a decryption transform belongs.

> SecTransform is no longer supported

## Declaration

```swift
func SecDecryptTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransform](sectransform.md) object meant for decryption.

# SecDecryptTransformGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which a decryption transform belongs.

> SecTransform is no longer supported

## Declaration

```objectivec
CFTypeID SecDecryptTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransformRef](sectransform.md) object meant for decryption.
