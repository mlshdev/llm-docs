> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckeyderivefrompassword(_:_:_:)](https://developer.apple.com/documentation/security/seckeyderivefrompassword(_:_:_:))

# SecKeyDeriveFromPassword(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns a key object in which the key data is derived from a password.

> No longer supported

## Declaration

```swift
func SecKeyDeriveFromPassword(_ password: CFString, _ parameters: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> SecKey?
```

## Parameters

- `password`: The password from which the key should be derived.
- `parameters`: A set of parameters for deriving the password.
- `error`: A pointer to a [CFError](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The derived key object, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The parameters dictionary must contain at least the following keys:

- [kSecKeyKeyType](kseckeykeytype.md)—the type of symmetric key to generate.
- [kSecAttrSalt](ksecattrsalt.md)—a `CFDataRef` object containing the salt value that is mixed into the pseudorandom rounds.

The parameters dictionary may contain the following optional keys:

- [kSecAttrPRF](ksecattrprf.md) \- the algorithm to use for the pseudorandom-function.

If zero, this defaults to [kSecAttrPRFHmacAlgSHA1](ksecattrprfhmacalgsha1.md). For a list of possible values, see `kSecAttrPRF Value Constants`.

- [kSecAttrRounds](ksecattrrounds.md)—the number of times to call the pseudorandom function. If zero, the count is computed so that computation will take 1/10 of a second (on average).
- [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)—a `CFNumberRef` value containing the requested key size in bits. The key size must be valid for the key type. Defaults to 128 if not provided.

# SecKeyDeriveFromPassword (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Returns a key object in which the key data is derived from a password.

> No longer supported

## Declaration

```objectivec
SecKeyRefSecKeyDeriveFromPassword(CFStringRef password, CFDictionaryRef parameters, CFErrorRef*error);
```

## Parameters

- `password`: The password from which the key should be derived.
- `parameters`: A set of parameters for deriving the password.
- `error`: A pointer to a [CFErrorRef](../corefoundation/cferror.md) variable where an error object is stored upon failure. If not `NULL`, the caller is responsible for checking this variable and releasing the resulting object if it exists.

<a id="return-value"></a>

## Return Value

The derived key object, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free the key’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The parameters dictionary must contain at least the following keys:

- [kSecKeyKeyType](kseckeykeytype.md)—the type of symmetric key to generate.
- [kSecAttrSalt](ksecattrsalt.md)—a `CFDataRef` object containing the salt value that is mixed into the pseudorandom rounds.

The parameters dictionary may contain the following optional keys:

- [kSecAttrPRF](ksecattrprf.md) \- the algorithm to use for the pseudorandom-function.

If zero, this defaults to [kSecAttrPRFHmacAlgSHA1](ksecattrprfhmacalgsha1.md). For a list of possible values, see `kSecAttrPRF Value Constants`.

- [kSecAttrRounds](ksecattrrounds.md)—the number of times to call the pseudorandom function. If zero, the count is computed so that computation will take 1/10 of a second (on average).
- [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)—a `CFNumberRef` value containing the requested key size in bits. The key size must be valid for the key type. Defaults to 128 if not provided.
