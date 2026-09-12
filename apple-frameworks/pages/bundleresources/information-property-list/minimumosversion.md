> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/minimumosversion](https://developer.apple.com/documentation/bundleresources/information-property-list/minimumosversion)

# MinimumOSVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The minimum version of the operating system required for the app to run in iOS, iPadOS, tvOS, and watchOS.

## Details

`MinimumOSVersion`

## Mentioned In

- [Managing your app’s information property list values](../managing-your-app-s-information-property-list.md)

<a id="Discussion"></a>

## Discussion

The App Store uses this key to indicate the OS releases on which your app can run.

Don’t specify `MinimumOSVersion` in the `Info.plist` file for apps built in Xcode. It uses the value of the Deployment Target in the General settings pane.

For macOS, see [LSMinimumSystemVersion](lsminimumsystemversion.md).

## See Also

### Operating system version

- [LSMinimumSystemVersion](lsminimumsystemversion.md): The minimum version of the operating system required for the app to run in macOS.
- [LSMinimumSystemVersionByArchitecture](lsminimumsystemversionbyarchitecture.md): The minimum version of macOS required for the app to run on a set of architectures.
- [LSRequiresIPhoneOS](lsrequiresiphoneos.md): A Boolean value indicating whether the app must run in iOS.
- [WKApplication](wkapplication.md)
- [WKWatchKitApp](wkwatchkitapp.md): A Boolean value that indicates whether the bundle is a watchOS app.
