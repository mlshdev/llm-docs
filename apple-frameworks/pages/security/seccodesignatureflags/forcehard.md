> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags/forcehard](https://developer.apple.com/documentation/security/seccodesignatureflags/forcehard)

# forceHard (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the [hard](../seccodestatus/hard.md) status flag on launch.

## Declaration

```swift
static var forceHard: SecCodeSignatureFlags { get }
```

<a id="Discussion"></a>

## Discussion

The `kSecCodeStatusHard` flag indicates that the code prefers to be denied access to a resource if gaining such access would cause its invalidation. Once the hard bit is set, it cannot be cleared. Therefore, setting this option flag guarantees that the code will always have the `kSecCodeStatusHard` flag set.

# kSecCodeSignatureForceHard (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Always set the [kSecCodeStatusHard](../seccodestatus/hard.md) status flag on launch.

## Declaration

```objectivec
kSecCodeSignatureForceHard
```

<a id="Discussion"></a>

## Discussion

The `kSecCodeStatusHard` flag indicates that the code prefers to be denied access to a resource if gaining such access would cause its invalidation. Once the hard bit is set, it cannot be cleared. Therefore, setting this option flag guarantees that the code will always have the `kSecCodeStatusHard` flag set.
