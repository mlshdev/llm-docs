> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccferrorguestattributes](https://developer.apple.com/documentation/security/kseccferrorguestattributes)

# kSecCFErrorGuestAttributes (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object containing an attribute that is unrecognized or that contains a value of the wrong type.

## Declaration

```swift
let kSecCFErrorGuestAttributes: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present when you pass a bad guest attribute to the [SecHostCreateGuest](sechostcreateguest.md) or [SecHostSetGuestStatus](sechostsetgueststatus.md) function.

# kSecCFErrorGuestAttributes (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a Core Foundation object containing an attribute that is unrecognized or that contains a value of the wrong type.

## Declaration

```objectivec
extern CFStringRef const kSecCFErrorGuestAttributes;
```

<a id="Discussion"></a>

## Discussion

This key is present when you pass a bad guest attribute to the [SecHostCreateGuest](sechostcreateguest.md) or [SecHostSetGuestStatus](sechostsetgueststatus.md) function.
