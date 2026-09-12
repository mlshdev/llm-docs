> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secencodetransformcreate(_:_:)](https://developer.apple.com/documentation/security/secencodetransformcreate(_:_:))

# SecEncodeTransformCreate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates an encode transform object.

> SecTransform is no longer supported

## Declaration

```swift
func SecEncodeTransformCreate(_ encodeType: CFTypeRef, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform?
```

## Parameters

- `encodeType`: The type of digest to compute. You may pass `NULL` for this parameter, in which case an appropriate algorithm will be chosen for you. See `Encoding Types` for a list of valid values.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `nil` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes an encode.

# SecEncodeTransformCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates an encode transform object.

> SecTransform is no longer supported

## Declaration

```objectivec
SecTransformRefSecEncodeTransformCreate(CFTypeRef encodeType, CFErrorRef*error);
```

## Parameters

- `encodeType`: The type of digest to compute. You may pass `NULL` for this parameter, in which case an appropriate algorithm will be chosen for you. See `Encoding Types` for a list of valid values.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `nil` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which computes an encode.
