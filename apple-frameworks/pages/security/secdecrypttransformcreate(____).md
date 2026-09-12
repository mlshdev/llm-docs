> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secdecrypttransformcreate(_:_:)](https://developer.apple.com/documentation/security/secdecrypttransformcreate(_:_:))

# SecDecryptTransformCreate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a decryption transform object.

> SecTransform is no longer supported

## Declaration

```swift
func SecDecryptTransformCreate(_ keyRef: SecKey, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecTransform
```

## Parameters

- `keyRef`: The key for the operation
- `error`: A pointer to a [CFError](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `NULL` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `nil` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which decrypts data.

# SecDecryptTransformCreate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a decryption transform object.

> SecTransform is no longer supported

## Declaration

```objectivec
SecTransformRefSecDecryptTransformCreate(SecKeyRef keyRef, CFErrorRef*error);
```

## Parameters

- `keyRef`: The key for the operation
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md). This pointer will be set if an error occurred. This value may be `NULL` if you do not want an error returned.

<a id="return-value"></a>

## Return Value

A pointer to a new transform or `nil` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

This function creates a transform which decrypts data.
