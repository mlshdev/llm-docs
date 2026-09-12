> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.persistent-content-capture](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.persistent-content-capture)

# Persistent Content Capture

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 14.4+

A Boolean value that indicates whether a Virtual Network Computing (VNC) app needs persistent access to screen capture.

## Details

`com.apple.developer.persistent-content-capture`

<a id="Discussion"></a>

## Discussion

The Persistent Content Capture entitlement enables VNC apps to view and record the screen.

Before your app can use this entitlement, request permission to use it by submitting the [Persistent Content Capture Entitlement Request](https://developer.apple.com/contact/request/persistent-content-capture/) form. After receiving permission from Apple to use this entitlement, add it to your app’s profile in Xcode following the instrucitons Apple provides.
