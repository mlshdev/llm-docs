> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appconfiguration](https://developer.apple.com/documentation/storekit/skoverlay/appconfiguration)

# SKOverlay.AppConfiguration (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents the attributes of an overlay you use to recommend another app on the App Store.

## Declaration

```swift
class AppConfiguration
```

## Topics

### Creating an App Configuration

- [init(appIdentifier:position:)](appconfiguration/init%28appidentifier_position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [appIdentifier](appconfiguration/appidentifier.md): The iTunes identifier of the recommended app.
- [position](appconfiguration/position.md): The position of the overlay on the screen.
- [SKOverlay.Position](position.md): Constants that identify the position of an overlay on the screen.

### Dismissing the Overlay

- [userDismissible](appconfiguration/userdismissible.md): A Boolean value that indicates whether the user can dismiss the overlay.

### Verifying Advertising Campaigns

- [campaignToken](appconfiguration/campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](appconfiguration/providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue(\_:forKey:)](appconfiguration/setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.
- [additionalValue(forKey:)](appconfiguration/additionalvalue%28forkey_%29.md): Returns the object associated with the key.

### Promoting the Latest App Version

- [latestReleaseID](appconfiguration/latestreleaseid.md): The release ID of the latest version of your app as displayed in App Store Connect.

### Advertising Another App

- [customProductPageIdentifier](appconfiguration/customproductpageidentifier.md): An optional identifier for an app’s custom product page.

### Setting an Ad Impression

- [setAdImpression(\_:)](appconfiguration/setadimpression%28__%29.md)

### Instance Properties

- [adAttributionReengagementURL](appconfiguration/adattributionreengagementurl.md)
- [appImpression](appconfiguration/appimpression.md)

## Relationships

### Inherits From

- [SKOverlay.Configuration](configuration-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an overlay

- [init(configuration:)](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlay.AppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlay.Configuration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

# SKOverlayAppConfiguration (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents the attributes of an overlay you use to recommend another app on the App Store.

## Declaration

```objectivec
@interface SKOverlayAppConfiguration : SKOverlayConfiguration
```

## Topics

### Creating an App Configuration

- [initWithAppIdentifier:position:](appconfiguration/init%28appidentifier_position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [appIdentifier](appconfiguration/appidentifier.md): The iTunes identifier of the recommended app.
- [position](appconfiguration/position.md): The position of the overlay on the screen.
- [SKOverlayPosition](position.md): Constants that identify the position of an overlay on the screen.

### Dismissing the Overlay

- [userDismissible](appconfiguration/userdismissible.md): A Boolean value that indicates whether the user can dismiss the overlay.

### Verifying Advertising Campaigns

- [campaignToken](appconfiguration/campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](appconfiguration/providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue:forKey:](appconfiguration/setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key; for example, a value for measuring the effectiveness of an ad campaign.
- [additionalValueForKey:](appconfiguration/additionalvalue%28forkey_%29.md): Returns the object associated with the key.

### Promoting the Latest App Version

- [latestReleaseID](appconfiguration/latestreleaseid.md): The release ID of the latest version of your app as displayed in App Store Connect.

### Advertising Another App

- [customProductPageIdentifier](appconfiguration/customproductpageidentifier.md): An optional identifier for an app’s custom product page.

### Setting an Ad Impression

- [setAdImpression:](appconfiguration/setadimpression%28__%29.md)

## Relationships

### Inherits From

- [SKOverlayConfiguration](configuration-swift.class.md)

## See Also

### Creating an overlay

- [initWithConfiguration:](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlayAppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlayConfiguration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.
