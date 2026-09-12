> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags/host](https://developer.apple.com/documentation/security/seccodesignatureflags/host)

# host (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

May host guest code.

## Declaration

```swift
static var host: SecCodeSignatureFlags { get }
```

<a id="Discussion"></a>

## Discussion

Indicates that the code may act as a host that controls and supervises guest code. If this flag is not set in a code signature, the code is never considered eligible to be a host, and any attempt to act like one is ignored or rejected.

# kSecCodeSignatureHost (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

May host guest code.

## Declaration

```objectivec
kSecCodeSignatureHost
```

<a id="Discussion"></a>

## Discussion

Indicates that the code may act as a host that controls and supervises guest code. If this flag is not set in a code signature, the code is never considered eligible to be a host, and any attempt to act like one is ignored or rejected.
