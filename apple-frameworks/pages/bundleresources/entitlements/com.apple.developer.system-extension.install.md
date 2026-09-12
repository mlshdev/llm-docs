> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.system-extension.install](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.install)

# System Extension Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean value that indicates whether your app has permission to activate or deactivate system extensions.

## Details

`com.apple.developer.system-extension.install`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, enable the System Extension capability in Xcode. Add this entitlement for all system extension types, including DriverKit extensions.

## See Also

### Essentials

- [System Extension Redistributable Entitlement](com.apple.developer.system-extension.redistributable.md): A Boolean value that indicates whether other development teams may distribute a system extension you create.
