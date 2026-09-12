> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secdigesttransformcreate(_:_:_:)](https://developer.apple.com/documentation/security/secdigesttransformcreate(_:_:_:))

# SecDigestTransformCreate(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a digest transform object.

> SecTransform is no longer supported

## Declaration

```swift
func SecDigestTransformCreate(_ digestType: CFTypeRef?, _ digestLength: CFIndex, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform
```

## Parameters

- `digestType`: The type of digest to compute. You may pass `NULL` for this parameter, in which case an appropriate algorithm will be chosen for you. Otherwise, use one of the values listed in `Digest Constants`.
- `digestLength`: The desired digest length. Note that certain algorithms may only support certain sizes. You may pass `0` for this parameter, in which case an appropriate length will be chosen for you.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `nil` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes a cryptographic digest.

# SecDigestTransformCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a digest transform object.

> SecTransform is no longer supported

## Declaration

```objectivec
SecTransformRefSecDigestTransformCreate(CFTypeRef digestType, CFIndex digestLength, CFErrorRef*error);
```

## Parameters

- `digestType`: The type of digest to compute. You may pass `NULL` for this parameter, in which case an appropriate algorithm will be chosen for you. Otherwise, use one of the values listed in `Digest Constants`.
- `digestLength`: The desired digest length. Note that certain algorithms may only support certain sizes. You may pass `0` for this parameter, in which case an appropriate length will be chosen for you.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `nil` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes a cryptographic digest.
