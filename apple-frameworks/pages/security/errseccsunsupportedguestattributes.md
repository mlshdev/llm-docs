> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/errseccsunsupportedguestattributes](https://developer.apple.com/documentation/security/errseccsunsupportedguestattributes)

# errSecCSUnsupportedGuestAttributes (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cannot locate guest code using this attribute set.

## Declaration

```swift
var errSecCSUnsupportedGuestAttributes: OSStatus { get }
```

<a id="Discussion"></a>

## Discussion

When calling the [SecHostCreateGuest](sechostcreateguest.md) function or the [SecCodeCopyGuestWithAttributes(\_:\_:\_:\_:)](seccodecopyguestwithattributes%28________%29.md) function, you passed a key that either isn’t understood, recognized, or supported.

# errSecCSUnsupportedGuestAttributes (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cannot locate guest code using this attribute set.

## Declaration

```objectivec
errSecCSUnsupportedGuestAttributes
```

<a id="Discussion"></a>

## Discussion

When calling the [SecHostCreateGuest](sechostcreateguest.md) function or the [SecCodeCopyGuestWithAttributes](seccodecopyguestwithattributes%28________%29.md) function, you passed a key that either isn’t understood, recognized, or supported.
