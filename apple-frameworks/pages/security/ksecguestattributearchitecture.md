> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecguestattributearchitecture](https://developer.apple.com/documentation/security/ksecguestattributearchitecture)

# kSecGuestAttributeArchitecture (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number representing the CPU type under which the guest code is designed to run.

## Declaration

```swift
let kSecGuestAttributeArchitecture: CFString
```

<a id="Discussion"></a>

## Discussion

See the ARCH(3) manual page for a list of possible CPU types.

# kSecGuestAttributeArchitecture (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a number representing the CPU type under which the guest code is designed to run.

## Declaration

```objectivec
extern CFStringRef const kSecGuestAttributeArchitecture;
```

<a id="Discussion"></a>

## Discussion

See the ARCH(3) manual page for a list of possible CPU types.
