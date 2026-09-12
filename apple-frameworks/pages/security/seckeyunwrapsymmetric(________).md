> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyunwrapsymmetric(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeyunwrapsymmetric(_:_:_:_:))

# SecKeyUnwrapSymmetric(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Unwraps a wrapped symmetric key.

> No longer supported

## Declaration

```swift
func SecKeyUnwrapSymmetric(_ keyToUnwrap: UnsafeMutablePointer<Unmanaged<CFData>?>, _ unwrappingKey: SecKey, _ parameters: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecKey?
```

## Parameters

- `keyToUnwrap`: The wrapped key to unwrap.
- `unwrappingKey`: The key that must be used to unwrap `keyToUnwrap`.
- `parameters`: A parameter list for the unwrapping process. This is usually either an empty dictionary or a dictionary containing a value for [kSecAttrSalt](ksecattrsalt.md).
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The unwrapped key, or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.

# SecKeyUnwrapSymmetric (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Unwraps a wrapped symmetric key.

> No longer supported

## Declaration

```objectivec
SecKeyRefSecKeyUnwrapSymmetric(CFDataRef*keyToUnwrap, SecKeyRef unwrappingKey, CFDictionaryRef parameters, CFErrorRef*error);
```

## Parameters

- `keyToUnwrap`: The wrapped key to unwrap.
- `unwrappingKey`: The key that must be used to unwrap `keyToUnwrap`.
- `parameters`: A parameter list for the unwrapping process. This is usually either an empty dictionary or a dictionary containing a value for [kSecAttrSalt](ksecattrsalt.md).
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The unwrapped key, or `NULL` on failure. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.
