> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hardened-process.hardened-heap](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hardened-process.hardened-heap)

# com.apple.security.hardened-process.hardened-heap

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether your app or extension opts in to additional hardening for heap allocations.

## Details

`com.apple.security.hardened-process.hardened-heap`

<a id="Discussion"></a>

## Discussion

When you add this entitlement to your app or extension, the system applies additional restrictions to the type-aware memory allocator for memory your app or extension requests. These may include enforcing address space isolation of certain types by limiting the cumulative amount of virtual memory it can allocate, and probabilistically placing inaccessible guard pages around live allocations or upon deallocation.

In addition to this entitlement, set the build settings `CLANG_ENABLE_C_TYPED_ALLOCATOR_SUPPORT` and `CLANG_ENABLE_CPLUSPLUS_TYPED_ALLOCATOR_SUPPORT` to `YES`, so the compiler rewrites memory allocations in your code to use the type-aware allocator.

Xcode adds this entitlement to your app or extension when you add the Enhanced Security capability. For more information, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

> **Note**

> This entitlement requires the following entitlements:
>
> - [com.apple.security.hardened-process](com.apple.security.hardened-process.md)
> - [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md)

## See Also

### Hardened process

- [com.apple.security.hardened-process](com.apple.security.hardened-process.md): A Boolean value that indicates whether the executable opts in to additional security checks.
- [com.apple.security.hardened-process.enhanced-security-version](com.apple.security.hardened-process.enhanced-security-version.md): Deprecated. The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md): The entitlement required for an executable to opt in to enhanced security protections.
- [com.apple.security.hardened-process.platform-restrictions](com.apple.security.hardened-process.platform-restrictions.md): Deprecated. An integer value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.platform-restrictions-string](com.apple.security.hardened-process.platform-restrictions-string.md): A string value that indicates the level of additional runtime security protections your app or extension opts in to.
- [com.apple.security.hardened-process.dyld-ro](com.apple.security.hardened-process.dyld-ro.md): An entitlement that marks memory used for internal platform state as read-only.
- [com.apple.security.hardened-process.no-guard-objects](com.apple.security.hardened-process.no-guard-objects.md): A Boolean value that turns off guard objects for the process.
