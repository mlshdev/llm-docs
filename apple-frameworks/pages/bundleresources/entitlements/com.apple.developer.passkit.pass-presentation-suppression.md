> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.passkit.pass-presentation-suppression](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.passkit.pass-presentation-suppression)

# Pass Presentation Suppression

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · watchOS 8.0+

An entitlement that prevents the system from initiating Apple Pay while the app is in the foreground.

## Details

`com.apple.developer.passkit.pass-presentation-suppression`

<a id="Discussion"></a>

## Discussion

Add this entitlement to your app that uses NFC or a related technology, to stop the system from showing the Apple Pay UI while your app is in the foreground.
