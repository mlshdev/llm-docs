> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/lsminimumsystemversion](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversion)

# LSMinimumSystemVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The minimum version of the operating system required for the app to run in macOS.

## Details

`LSMinimumSystemVersion`

<a id="Discussion"></a>

## Discussion

Use this key to indicate the minimum macOS release that your app supports. The App Store uses this key to indicate the macOS releases on which your app can run, and to show compatibility with a person’s Mac.

Starting with macOS 11.4, the lowest version number you can specify as the value for the [LSMinimumSystemVersion](lsminimumsystemversion.md) key is:

- `10` if your app links against the macOS SDK.
- `10.15` if your app links against the iOS 14.3 SDK (or later) and builds using Mac Catalyst.
- `11` if your iPad or iPhone app links against the iOS 14.3 SDK (or later) and can run on a Mac with Apple silicon.

To specify the minimum version of iOS, iPadOS, tvOS, or watchOS that your app supports, use [MinimumOSVersion](minimumosversion.md).

## See Also

### Operating system version

- [LSMinimumSystemVersionByArchitecture](lsminimumsystemversionbyarchitecture.md): The minimum version of macOS required for the app to run on a set of architectures.
- [MinimumOSVersion](minimumosversion.md): The minimum version of the operating system required for the app to run in iOS, iPadOS, tvOS, and watchOS.
- [LSRequiresIPhoneOS](lsrequiresiphoneos.md): A Boolean value indicating whether the app must run in iOS.
- [WKApplication](wkapplication.md)
- [WKWatchKitApp](wkwatchkitapp.md): A Boolean value that indicates whether the bundle is a watchOS app.
