> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecguestattributecanonical

# kSecGuestAttributeCanonical (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the guest code object for that guest.

## Declaration

```swift
let kSecGuestAttributeCanonical: CFString
```

<a id="Discussion"></a>

## Discussion

This object plus the process ID ([kSecGuestAttributePid](ksecguestattributepid.md)) uniquely identify the guest.

# kSecGuestAttributeCanonical (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the guest code object for that guest.

## Declaration

```objectivec
extern CFStringRef const kSecGuestAttributeCanonical;
```

<a id="Discussion"></a>

## Discussion

This object plus the process ID ([kSecGuestAttributePid](ksecguestattributepid.md)) uniquely identify the guest.
