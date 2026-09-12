> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hardened-process.enhanced-security-version-string](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hardened-process.enhanced-security-version-string)

# com.apple.security.hardened-process.enhanced-security-version-string

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · macOS 26.4+ · visionOS 26.4+

The entitlement required for an executable to opt in to enhanced security protections.

## Details

`com.apple.security.hardened-process.enhanced-security-version-string`

<a id="Discussion"></a>

## Discussion

The default value for this entitlement is the `*` wildcard.

Xcode adds this entitlement to your app or extension when you add the Enhanced Security capability. Set this value to `2` or greater to turn on guard objects automatically. To turn off guard objects, add the [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md) entitlement. For more information, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

> **Note**

> This entitlement requires the following entitlement:
>
> - [com.apple.security.hardened-process](com.apple.security.hardened-process.md)

## See Also

### Hardened process

- [com.apple.security.hardened-process](com.apple.security.hardened-process.md): A Boolean value that indicates whether the executable opts in to additional security checks.
- [com.apple.security.hardened-process.enhanced-security-version](com.apple.security.hardened-process.enhanced-security-version.md): Deprecated. The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.hardened-heap](com.apple.security.hardened-process.hardened-heap.md): A Boolean value that indicates whether your app or extension opts in to additional hardening for heap allocations.
- [com.apple.security.hardened-process.platform-restrictions](com.apple.security.hardened-process.platform-restrictions.md): Deprecated. An integer value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.platform-restrictions-string](com.apple.security.hardened-process.platform-restrictions-string.md): A string value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.dyld-ro](com.apple.security.hardened-process.dyld-ro.md): An entitlement that marks memory used for internal platform state as read-only.
- [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md): A Boolean value that turns off guard objects for the process.
