> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.siri](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.siri)

# Siri Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value that indicates whether the app handles Siri requests.

## Details

`com.apple.developer.siri`

<a id="Discussion"></a>

## Discussion

The App Store requires the presence of this entitlement for iOS or watchOS apps containing Intents app extensions that handle any Siri requests other than shortcut requests. To add the entitlement to your app, enable the Siri capability in Xcode.
