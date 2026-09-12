> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeywrapsymmetric(_:_:_:_:)](https://developer.apple.com/documentation/security/seckeywrapsymmetric(_:_:_:_:))

# SecKeyWrapSymmetric(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Wraps a symmetric key with another key.

> No longer supported

## Declaration

```swift
func SecKeyWrapSymmetric(_ keyToWrap: SecKey, _ wrappingKey: SecKey, _ parameters: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFData?
```

## Parameters

- `keyToWrap`: The key to wrap.
- `wrappingKey`: The key to use when wrapping `keyToWrap`.
- `parameters`: A parameter list for the unwrapping process. This is usually either an empty dictionary or a dictionary containing a value for [kSecAttrSalt](ksecattrsalt.md).
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The wrapped key, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.

# SecKeyWrapSymmetric (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Wraps a symmetric key with another key.

> No longer supported

## Declaration

```objectivec
CFDataRefSecKeyWrapSymmetric(SecKeyRef keyToWrap, SecKeyRef wrappingKey, CFDictionaryRef parameters, CFErrorRef*error);
```

## Parameters

- `keyToWrap`: The key to wrap.
- `wrappingKey`: The key to use when wrapping `keyToWrap`.
- `parameters`: A parameter list for the unwrapping process. This is usually either an empty dictionary or a dictionary containing a value for [kSecAttrSalt](ksecattrsalt.md).
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The wrapped key, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the data’s memory when you are done with it.
