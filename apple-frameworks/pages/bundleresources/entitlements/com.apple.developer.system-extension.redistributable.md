> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.system-extension.redistributable)

# System Extension Redistributable Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean value that indicates whether other development teams may distribute a system extension you create.

## Details

`com.apple.developer.system-extension.redistributable`

<a id="Discussion"></a>

## Discussion

Add this entitlement to a system extension that you create and sign using your development team credentials, but which other development teams distribute in their apps. This extension allows a distributing app to have a different team ID than the one associated with the system extension. If this entitlement isn’t present, the team ID of the app and system extension must match.

## See Also

### Essentials

- [System Extension Entitlement](com.apple.developer.system-extension.install.md): A Boolean value that indicates whether your app has permission to activate or deactivate system extensions.
