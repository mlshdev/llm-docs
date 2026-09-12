> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeycreatefromdata(_:_:_:)](https://developer.apple.com/documentation/security/seckeycreatefromdata(_:_:_:))

# SecKeyCreateFromData(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Constructs a SecKeyRef object for a symmetric key.

> No longer supported

## Declaration

```swift
func SecKeyCreateFromData(_ parameters: CFDictionary, _ keyData: CFData, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecKey?
```

## Parameters

- `parameters`: A parameter dictionary that describes the key. See the discussion for details.
- `keyData`: A `CFDataRef` object that contains the raw key data.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A symmetric key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The parameters dictionary must contain (at minimum) an entry for the [kSecAttrKeyType](ksecattrkeytype.md) key with a value of [kSecAttrKeyTypeAES](ksecattrkeytypeaes.md) or any other key type defined in Key Type Value.

The keys below may be optionally set in the parameters dictionary (with a `CFBooleanRef` value) to override the default key usage values:

- [kSecAttrCanEncrypt](ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](ksecattrcandecrypt.md)
- [kSecAttrCanWrap](ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](ksecattrcanunwrap.md)

These values default to `true` if no value is specified.

# SecKeyCreateFromData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Constructs a SecKeyRef object for a symmetric key.

> No longer supported

## Declaration

```objectivec
SecKeyRefSecKeyCreateFromData(CFDictionaryRef parameters, CFDataRef keyData, CFErrorRef*error);
```

## Parameters

- `parameters`: A parameter dictionary that describes the key. See the discussion for details.
- `keyData`: A `CFDataRef` object that contains the raw key data.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

A symmetric key. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The parameters dictionary must contain (at minimum) an entry for the [kSecAttrKeyType](ksecattrkeytype.md) key with a value of [kSecAttrKeyTypeAES](ksecattrkeytypeaes.md) or any other key type defined in Key Type Value.

The keys below may be optionally set in the parameters dictionary (with a `CFBooleanRef` value) to override the default key usage values:

- [kSecAttrCanEncrypt](ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](ksecattrcandecrypt.md)
- [kSecAttrCanWrap](ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](ksecattrcanunwrap.md)

These values default to `true` if no value is specified.
