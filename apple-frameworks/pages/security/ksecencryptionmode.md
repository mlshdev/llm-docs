> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecencryptionmode](https://developer.apple.com/documentation/security/ksecencryptionmode)

# kSecEncryptionMode (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The encryption mode.

> SecTransform is no longer supported

## Declaration

```swift
let kSecEncryptionMode: CFString
```

<a id="Discussion"></a>

## Discussion

If you do not supply this key, an appropriate value will be supplied for you. See [Encryption Modes](transform-attributes.md#Encryption-Modes) for a list of possible values.

# kSecEncryptionMode (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The encryption mode.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecEncryptionMode;
```

<a id="Discussion"></a>

## Discussion

If you do not supply this key, an appropriate value will be supplied for you. See [Encryption Modes](transform-attributes.md#Encryption-Modes) for a list of possible values.
