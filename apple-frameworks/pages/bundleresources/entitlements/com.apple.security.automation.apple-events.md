> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.automation.apple-events](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.automation.apple-events)

# Apple Events Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the app may prompt the user for permission to send Apple events to other apps.

## Details

`com.apple.security.automation.apple-events`

<a id="Discussion"></a>

## Discussion

Your app doesn’t need the Apple Events entitlement if it only sends Apple events to itself or to other processes signed with the same team ID.

To add this entitlement to your app, first enable the Hardened Runtime capability in Xcode, and then under Resource Access, select Apple Events.
