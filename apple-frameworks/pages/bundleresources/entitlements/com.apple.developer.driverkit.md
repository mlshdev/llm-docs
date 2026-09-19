> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit

# com.apple.developer.driverkit

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 10.15+

A Boolean value that indicates whether your extension has permission to run as a user-space driver.

## Details

`com.apple.developer.driverkit`

<a id="Discussion"></a>

## Discussion

Add this entitlement to every DriverKit driver you create. You must request this entitlement from Apple. For information about how to request the entitlement, see [System Extensions and DriverKit](https://developer.apple.com/system-extensions/).
