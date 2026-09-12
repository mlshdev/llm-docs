> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags/forcekill](https://developer.apple.com/documentation/security/seccodesignatureflags/forcekill)

# forceKill (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the termination status flag on launch.

## Declaration

```swift
static var forceKill: SecCodeSignatureFlags { get }
```

<a id="Discussion"></a>

## Discussion

The `kSecCodeStatusKill` flag indicates that the code wishes to be terminated if it is ever invalidated. Once this is set, it cannot be cleared. Therefore, setting this option flag guarantees that the running code will always be valid, since it will die immediately if it becomes invalid.

# kSecCodeSignatureForceKill (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the termination status flag on launch.

## Declaration

```objectivec
kSecCodeSignatureForceKill
```

<a id="Discussion"></a>

## Discussion

The `kSecCodeStatusKill` flag indicates that the code wishes to be terminated if it is ever invalidated. Once this is set, it cannot be cleared. Therefore, setting this option flag guarantees that the running code will always be valid, since it will die immediately if it becomes invalid.
