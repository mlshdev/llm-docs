> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hardened-process.platform-restrictions](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hardened-process.platform-restrictions)

# com.apple.security.hardened-process.platform-restrictions

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

An integer value that indicates the level of additional runtime security protections your app or extension opts in to.

> This entitlement has been replaced with [com.apple.security.hardened-process.platform-restrictions-string](com.apple.security.hardened-process.platform-restrictions-string.md).

## Details

`com.apple.security.hardened-process.platform-restrictions`

<a id="Discussion"></a>

## Discussion

Add this entitlement with the value `2` to your app or extension to instruct the system to protect against particular attacks that target the dynamic loader and Mach messaging.

Xcode adds this entitlement to your app or extension when you add the Enhanced Security capability. For more information, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

## See Also

### Hardened process

- [com.apple.security.hardened-process](com.apple.security.hardened-process.md): A Boolean value that indicates whether the executable opts in to additional security checks.
- [com.apple.security.hardened-process.enhanced-security-version](com.apple.security.hardened-process.enhanced-security-version.md): Deprecated. The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md): The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.hardened-heap](com.apple.security.hardened-process.hardened-heap.md): A Boolean value that indicates whether your app or extension opts in to additional hardening for heap allocations.
- [com.apple.security.hardened-process.platform-restrictions-string](com.apple.security.hardened-process.platform-restrictions-string.md): A string value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.dyld-ro](com.apple.security.hardened-process.dyld-ro.md): An entitlement that marks memory used for internal platform state as read-only.
- [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md): A Boolean value that turns off guard objects for the process.
