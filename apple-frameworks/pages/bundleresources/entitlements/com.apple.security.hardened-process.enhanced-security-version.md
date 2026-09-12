> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hardened-process.enhanced-security-version](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hardened-process.enhanced-security-version)

# com.apple.security.hardened-process.enhanced-security-version

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

The entitlement required for an executable to opt in to enhanced security protections.

> This entitlement has been replaced with [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md).

## Details

`com.apple.security.hardened-process.enhanced-security-version`

<a id="Discussion"></a>

## Discussion

Set this entitlement’s value to `2` to adopt the current version of enhanced security protections in your app or extension. Setting this value to `2` or greater turns on guard objects automatically. To turn off guard objects, add the [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md) entitlement. For more information, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

> **Note**

> This entitlement requires the following entitlements:
>
> - [com.apple.security.hardened-process](com.apple.security.hardened-process.md)

## See Also

### Hardened process

- [com.apple.security.hardened-process](com.apple.security.hardened-process.md): A Boolean value that indicates whether the executable opts in to additional security checks.
- [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md): The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.hardened-heap](com.apple.security.hardened-process.hardened-heap.md): A Boolean value that indicates whether your app or extension opts in to additional hardening for heap allocations.
- [com.apple.security.hardened-process.platform-restrictions](com.apple.security.hardened-process.platform-restrictions.md): Deprecated. An integer value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.platform-restrictions-string](com.apple.security.hardened-process.platform-restrictions-string.md): A string value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.dyld-ro](com.apple.security.hardened-process.dyld-ro.md): An entitlement that marks memory used for internal platform state as read-only.
- [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md): A Boolean value that turns off guard objects for the process.
