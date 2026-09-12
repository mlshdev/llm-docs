> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecguestattributesubarchitecture](https://developer.apple.com/documentation/security/ksecguestattributesubarchitecture)

# kSecGuestAttributeSubarchitecture (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number representing the CPU subtype under which the guest code is designed to run.

## Declaration

```swift
let kSecGuestAttributeSubarchitecture: CFString
```

<a id="Discussion"></a>

## Discussion

See the ARCH(3) manual page for a list of possible CPU subtypes.

# kSecGuestAttributeSubarchitecture (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number representing the CPU subtype under which the guest code is designed to run.

## Declaration

```objectivec
extern CFStringRef const kSecGuestAttributeSubarchitecture;
```

<a id="Discussion"></a>

## Discussion

See the ARCH(3) manual page for a list of possible CPU subtypes.
