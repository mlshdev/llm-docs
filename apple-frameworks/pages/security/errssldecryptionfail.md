> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errssldecryptionfail](https://developer.apple.com/documentation/security/errssldecryptionfail)

# errSSLDecryptionFail (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decryption failed.

## Declaration

```swift
var errSSLDecryptionFail: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

Among other causes, this may be caused by invalid data coming from the remote host, a damaged crypto key, or insufficient permission to use a key that is stored in the keychain.

# errSSLDecryptionFail (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decryption failed.

## Declaration

```objectivec
errSSLDecryptionFail
```

<a id="Discussion"></a>

## Discussion

Among other causes, this may be caused by invalid data coming from the remote host, a damaged crypto key, or insufficient permission to use a key that is stored in the keychain.
