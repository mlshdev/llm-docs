> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.install

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
