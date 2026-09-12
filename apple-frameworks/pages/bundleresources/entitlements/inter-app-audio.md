> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/inter-app-audio](https://developer.apple.com/documentation/bundleresources/entitlements/inter-app-audio)

# Inter-App Audio Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.2+ (deprecated in 13.0) · iPadOS 2.2+ (deprecated in 13.0)

A Boolean value that indicates whether the app may exchange audio with other Inter-App Audio-enabled apps.

> Inter-App Audio is deprecated in iOS 13 and is unavailable when running iPad apps in macOS.

## Details

`inter-app-audio`

<a id="Discussion"></a>

## Discussion

Enabling Inter-App Audio allows your app to send and receive audio from other Inter-App Audio enabled apps and provides access to Audio Unit extensions.

To add this entitlement to your app, enable the Inter-App Audio capability in Xcode.

## See Also

### Deprecated entitlements

- [Maps Entitlement](com.apple.developer.maps.md): Deprecated. A Boolean value that indicates whether the app may provide directions beyond what Maps supports, such as subway routes, hiking trails, and bike paths.
- [All files entitlement](com.apple.security.files.all.md): Deprecated. A Boolean value that indicates whether the app may have access to all files.
