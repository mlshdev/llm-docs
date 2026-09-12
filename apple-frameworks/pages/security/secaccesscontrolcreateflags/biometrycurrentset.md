> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/biometrycurrentset](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/biometrycurrentset)

# biometryCurrentSet (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Constraint to access an item with Touch ID for currently enrolled fingers, or from Face ID with the currently enrolled user.

## Declaration

```swift
static var biometryCurrentSet: SecAccessControlCreateFlags { get }
```

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger, or Face ID available and enrolled. The item is invalidated if fingers are added or removed for Touch ID, or if the user re-enrolls for Face ID.

# kSecAccessControlBiometryCurrentSet (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Constraint to access an item with Touch ID for currently enrolled fingers, or from Face ID with the currently enrolled user.

## Declaration

```objectivec
kSecAccessControlBiometryCurrentSet
```

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger, or Face ID available and enrolled. The item is invalidated if fingers are added or removed for Touch ID, or if the user re-enrolls for Face ID.
