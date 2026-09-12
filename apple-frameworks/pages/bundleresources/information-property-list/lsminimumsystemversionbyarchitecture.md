> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/lsminimumsystemversionbyarchitecture](https://developer.apple.com/documentation/bundleresources/information-property-list/lsminimumsystemversionbyarchitecture)

# LSMinimumSystemVersionByArchitecture

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

The minimum version of macOS required for the app to run on a set of architectures.

## Details

`LSMinimumSystemVersionByArchitecture`

## Properties

- `i386` — `string`: **Default:** `10.0.0`
- `ppc` — `string`: **Default:** `10.0.0`
- `ppc64` — `string`: **Default:** `10.0.0`
- `x86_64` — `string`: **Default:** `10.0.0`

<a id="Discussion"></a>

## Discussion

The possible dictionary keys are: `i386`, `ppc`, `ppc64`, and `x86_64`. The values are the minimum version for the architecture. The default values are `10.0.0`.

## See Also

### Operating system version

- [LSMinimumSystemVersion](lsminimumsystemversion.md): The minimum version of the operating system required for the app to run in macOS.
- [MinimumOSVersion](minimumosversion.md): The minimum version of the operating system required for the app to run in iOS, iPadOS, tvOS, and watchOS.
- [LSRequiresIPhoneOS](lsrequiresiphoneos.md): A Boolean value indicating whether the app must run in iOS.
- [WKApplication](wkapplication.md)
- [WKWatchKitApp](wkwatchkitapp.md): A Boolean value that indicates whether the bundle is a watchOS app.
