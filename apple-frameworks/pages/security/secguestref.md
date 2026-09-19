> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secguestref

# SecGuestRef (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A reference to a guest object, which identifies a particular block of guest code in the context of its code signing host.

## Declaration

```swift
typealias SecGuestRef = UInt32
```

<a id="Discussion"></a>

## Discussion

Guest handles are assigned by the host at will, with [kSecNoGuest](ksecnoguest.md) being reserved as the `NULL` value. They can be reused for new children if desired.

# SecGuestRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A reference to a guest object, which identifies a particular block of guest code in the context of its code signing host.

## Declaration

```objectivec
typedef u_int32_t SecGuestRef;
```

<a id="Discussion"></a>

## Discussion

Guest handles are assigned by the host at will, with [kSecNoGuest](ksecnoguest.md) being reserved as the `NULL` value. They can be reused for new children if desired.
