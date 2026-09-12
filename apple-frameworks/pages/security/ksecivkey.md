> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecivkey](https://developer.apple.com/documentation/security/ksecivkey)

# kSecIVKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The setting for an initialization vector.

> SecTransform is no longer supported

## Declaration

```swift
let kSecIVKey: CFString
```

<a id="Discussion"></a>

## Discussion

The key’s associated value is an initialization vector. Provide random bytes for this value—for example, created by calling the [SecRandomCopyBytes(\_:\_:\_:)](secrandomcopybytes%28______%29.md) method—unless your specification requires something else. The number of bytes in the vector should match the block size of the underlying block cipher. For example, use 16 bytes for AES encryption.

If you don’t supply a value for this key, any operations that require an initialization vector use a value of zero by default, which can compromise the security of your encryption.

# kSecIVKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The setting for an initialization vector.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecIVKey;
```

<a id="Discussion"></a>

## Discussion

The key’s associated value is an initialization vector. Provide random bytes for this value—for example, created by calling the [SecRandomCopyBytes](secrandomcopybytes%28______%29.md) method—unless your specification requires something else. The number of bytes in the vector should match the block size of the underlying block cipher. For example, use 16 bytes for AES encryption.

If you don’t supply a value for this key, any operations that require an initialization vector use a value of zero by default, which can compromise the security of your encryption.
