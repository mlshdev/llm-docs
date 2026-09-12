> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecguestattributehash](https://developer.apple.com/documentation/security/ksecguestattributehash)

# kSecGuestAttributeHash (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a data object containing the SHA-1 hash of the code directory.

## Declaration

```swift
let kSecGuestAttributeHash: CFString
```

<a id="Discussion"></a>

## Discussion

This hash can be used as a unique identifier to recognize this specific code in the future. This identifier is tied to the current version of the code, unlike the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) identifier, which remains stable across developer-approved updates. If you are not passing this hash in the attribute dictionary when you call the [SecHostCreateGuest](sechostcreateguest.md) function, then you must pass the [kSecCSGenerateGuestHash](kseccsgenerateguesthash.md) flag to the function as well.

# kSecGuestAttributeHash (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a data object containing the SHA-1 hash of the code directory.

## Declaration

```objectivec
extern CFStringRef const kSecGuestAttributeHash;
```

<a id="Discussion"></a>

## Discussion

This hash can be used as a unique identifier to recognize this specific code in the future. This identifier is tied to the current version of the code, unlike the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) identifier, which remains stable across developer-approved updates. If you are not passing this hash in the attribute dictionary when you call the [SecHostCreateGuest](sechostcreateguest.md) function, then you must pass the [kSecCSGenerateGuestHash](kseccsgenerateguesthash.md) flag to the function as well.
