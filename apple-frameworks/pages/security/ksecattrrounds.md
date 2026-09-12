> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrrounds](https://developer.apple.com/documentation/security/ksecattrrounds)

# kSecAttrRounds (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the number of rounds to run the pseudorandom function.

## Declaration

```swift
let kSecAttrRounds: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumber](../corefoundation/cfnumber.md) and indicates the number of rounds to run the pseudorandom function specified by [kSecAttrPRF](ksecattrprf.md) for a cryptographic key.

# kSecAttrRounds (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the number of rounds to run the pseudorandom function.

## Declaration

```objectivec
extern CFStringRef const kSecAttrRounds;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFNumberRef](../corefoundation/cfnumber.md) and indicates the number of rounds to run the pseudorandom function specified by [kSecAttrPRF](ksecattrprf.md) for a cryptographic key.
