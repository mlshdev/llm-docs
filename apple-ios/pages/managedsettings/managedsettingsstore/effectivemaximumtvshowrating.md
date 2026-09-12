> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/effectivemaximumtvshowrating](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/effectivemaximumtvshowrating)

# effectiveMaximumTVShowRating

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 26.0+

The TV rating constraint that is active on this device.

## Declaration

```swift
@Published<Int> var effectiveMaximumTVShowRating: Int { get }
```

## Mentioned In

- [Confirming the effective TV and movie ratings](../readingmedia.md)

<a id="discussion"></a>

## Discussion

An authorized app can use the Family Controls framework to apply a [maximumTVShowRating](../mediasettings/maximumtvshowrating-swift.property.md) to the device. If no `maximumTVShowRating` settings are active, then the value of this property is the default value of  [maximumTVShowRating](../mediasettings/maximumtvshowrating-swift.type.property.md). The system publishes changes dynamically.

## See Also

### Filtering media content

- [appStore](appstore.md): Settings that affect the App Store.
- [AppStoreSettings](../appstoresettings.md): Constraints on a user’s App Store settings.
- [application](application.md): Settings that affect applications.
- [ApplicationSettings](../applicationsettings.md): Constraints on the apps and categories of apps a user can run on their device.
- [effectiveMaximumMovieRating](effectivemaximummovierating.md): The movie rating constraint that is active on this device.
- [gameCenter](gamecenter.md): Settings that affect Game Center.
- [GameCenterSettings](../gamecentersettings.md): Constraints on the user’s Game Center settings.
- [media](media.md): Settings that affect media.
- [MediaSettings](../mediasettings.md): Constraints on the media content the user can access.
