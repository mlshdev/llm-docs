> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode)

# com.apple.developer.fileprovider.testing-mode

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether you can place domains in testing mode.

## Details

`com.apple.developer.fileprovider.testing-mode`

<a id="Discussion"></a>

## Discussion

You must add this entitlement to your target before assigning a non-empty value to a domain’s [testingModes](../../fileprovider/nsfileproviderdomain/testingmodes-swift.property.md) property. You can only use this entitlement during testing and development. If you add it to your app or extension, you must remove it before you submit your app to TestFlight or the Mac App Store.
