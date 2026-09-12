> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appclipconfiguration](https://developer.apple.com/documentation/storekit/skoverlay/appclipconfiguration)

# SKOverlay.AppClipConfiguration (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.

## Declaration

```swift
class AppClipConfiguration
```

## Topics

### Creating an App Clip Configuration

- [init(position:)](appclipconfiguration/init%28position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding app.
- [position](appclipconfiguration/position.md): The position of the overlay on the screen.
- [SKOverlay.Position](position.md): Constants that identify the position of an overlay on the screen.

### Verifying Advertising Campaigns

- [campaignToken](appclipconfiguration/campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](appclipconfiguration/providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue(\_:forKey:)](appclipconfiguration/setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValue(forKey:)](appclipconfiguration/additionalvalue%28forkey_%29.md): Returns the object associated with the key.

### Promoting the Latest App Version

- [latestReleaseID](appclipconfiguration/latestreleaseid.md): The release ID of the latest version of your parent app as displayed in App Store Connect.

### Advertising Another App

- [customProductPageIdentifier](appclipconfiguration/customproductpageidentifier.md): An identifier for a parent app’s custom product page.

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
- [SKOverlay.AppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlay.Configuration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

# SKOverlayAppClipConfiguration (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.

## Declaration

```objectivec
@interface SKOverlayAppClipConfiguration : SKOverlayConfiguration
```

## Topics

### Creating an App Clip Configuration

- [initWithPosition:](appclipconfiguration/init%28position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding app.
- [position](appclipconfiguration/position.md): The position of the overlay on the screen.
- [SKOverlayPosition](position.md): Constants that identify the position of an overlay on the screen.

### Verifying Advertising Campaigns

- [campaignToken](appclipconfiguration/campaigntoken.md): A token you use to represent an ad campaign and measure its effectiveness.
- [providerToken](appclipconfiguration/providertoken.md): A token that represents the provider of an app promotion campaign, and that you use to measure the campaign’s effectiveness.
- [setAdditionalValue:forKey:](appclipconfiguration/setadditionalvalue%28__forkey_%29.md): Sets an additional value for a key, such as a value for measuring the effectiveness of an ad campaign.
- [additionalValueForKey:](appclipconfiguration/additionalvalue%28forkey_%29.md): Returns the object associated with the key.

### Promoting the Latest App Version

- [latestReleaseID](appclipconfiguration/latestreleaseid.md): The release ID of the latest version of your parent app as displayed in App Store Connect.

### Advertising Another App

- [customProductPageIdentifier](appclipconfiguration/customproductpageidentifier.md): An identifier for a parent app’s custom product page.

## Relationships

### Inherits From

- [SKOverlayConfiguration](configuration-swift.class.md)

## See Also

### Creating an overlay

- [initWithConfiguration:](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlayAppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlayConfiguration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.
