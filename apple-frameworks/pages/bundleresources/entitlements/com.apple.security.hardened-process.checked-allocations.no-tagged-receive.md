> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.hardened-process.checked-allocations.no-tagged-receive](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.hardened-process.checked-allocations.no-tagged-receive)

# com.apple.security.hardened-process.checked-allocations.no-tagged-receive

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether to prevent receiving tagged memory from other processes.

## Details

`com.apple.security.hardened-process.checked-allocations.no-tagged-receive`

<a id="Discussion"></a>

## Discussion

This behavior provides additional protection for processes that run arbitrary code, such as interpreters and JITs.

To enable this entitlement for your app or extension in Xcode, first add the Enhanced Security capability. Then, under Memory Safety, select Prevent Receiving Tagged Memory.

For more information, see [Enabling enhanced security for your app](https://developer.apple.com/documentation/xcode/enabling-enhanced-security-for-your-app).

> **Note**

> This entitlement requires the following entitlements:
>
> - [com.apple.security.hardened-process](com.apple.security.hardened-process.md)
> - [com.apple.security.hardened-process.enhanced-security-version-string](com.apple.security.hardened-process.enhanced-security-version-string.md)
> - [com.apple.security.hardened-process.checked-allocations](com.apple.security.hardened-process.checked-allocations.md)

## See Also

### Hardware memory tagging

- [com.apple.security.hardened-process.checked-allocations](com.apple.security.hardened-process.checked-allocations.md): A Boolean value that enables tagging of pointers and memory allocations.
- [com.apple.security.hardened-process.checked-allocations.soft-mode](com.apple.security.hardened-process.checked-allocations.soft-mode.md): A Boolean value that indicates whether to log memory-tagging faults as a simulated crash, instead of terminating the process.
- [com.apple.security.hardened-process.checked-allocations.enable-pure-data](com.apple.security.hardened-process.checked-allocations.enable-pure-data.md): A Boolean value that indicates whether to tag memory that contains only data.
