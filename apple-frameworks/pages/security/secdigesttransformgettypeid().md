> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secdigesttransformgettypeid()

# SecDigestTransformGetTypeID() (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which a digest transform belongs.

> SecTransform is no longer supported

## Declaration

```swift
func SecDigestTransformGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransform](sectransform.md) object meant for digests.

# SecDigestTransformGetTypeID (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Returns the unique identifier of the opaque type to which a digest transform belongs.

> SecTransform is no longer supported

## Declaration

```objectivec
CFTypeID SecDigestTransformGetTypeID();
```

<a id="return-value"></a>

## Return Value

A value that identifies the opaque type of a [SecTransformRef](sectransform.md) object meant for digests.
