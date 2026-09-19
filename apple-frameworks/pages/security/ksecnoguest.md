> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecnoguest

# kSecNoGuest (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Not a valid `SecGuestRef` object.

## Declaration

```swift
var kSecNoGuest: SecGuestRef { get }
```

<a id="Discussion"></a>

## Discussion

Some functions in the API use this value to indicate that there is no guest, and some functions use it to indicate that the function applies to the host itself rather than to a guest.

# kSecNoGuest (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Not a valid `SecGuestRef` object.

## Declaration

```objectivec
kSecNoGuest
```

<a id="Discussion"></a>

## Discussion

Some functions in the API use this value to indicate that there is no guest, and some functions use it to indicate that the function applies to the host itself rather than to a guest.
