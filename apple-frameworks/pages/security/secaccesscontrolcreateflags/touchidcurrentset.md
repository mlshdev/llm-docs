> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/touchidcurrentset](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/touchidcurrentset)

# touchIDCurrentSet (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 11.3) · iPadOS 9.0+ (deprecated in 11.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12.1+ (deprecated in 10.13.4) · tvOS 9.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.3)

Constraint to access an item with Touch ID for currently enrolled fingers.

> Use [biometryCurrentSet](biometrycurrentset.md) instead.

## Declaration

```swift
static var touchIDCurrentSet: SecAccessControlCreateFlags { get }
```

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger. The item is invalidated if fingers are added or removed.

# kSecAccessControlTouchIDCurrentSet (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ (deprecated in 11.3) · iPadOS 9.0+ (deprecated in 11.3) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12.1+ (deprecated in 10.13.4) · tvOS 9.0+ (deprecated in 11.3) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.3)

Constraint to access an item with Touch ID for currently enrolled fingers.

> Use [kSecAccessControlBiometryCurrentSet](biometrycurrentset.md) instead.

## Declaration

```objectivec
kSecAccessControlTouchIDCurrentSet
```

<a id="Discussion"></a>

## Discussion

Touch ID must be available and enrolled with at least one finger. The item is invalidated if fingers are added or removed.
