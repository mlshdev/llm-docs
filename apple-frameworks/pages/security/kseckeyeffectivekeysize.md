> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseckeyeffectivekeysize](https://developer.apple.com/documentation/security/kseckeyeffectivekeysize)

# kSecKeyEffectiveKeySize (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Type uint32; value is the effective number of bits in this key.  For example, a DES key has a key size in bits (`kSecKeyKeySizeInBits`) of 64 but a value for `kSecKeyEffectiveKeySize` of 56.

## Declaration

```swift
var kSecKeyEffectiveKeySize: Int32 { get }
```

# kSecKeyEffectiveKeySize (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Type uint32; value is the effective number of bits in this key.  For example, a DES key has a key size in bits (`kSecKeyKeySizeInBits`) of 64 but a value for `kSecKeyEffectiveKeySize` of 56.

## Declaration

```objectivec
kSecKeyEffectiveKeySize
```
