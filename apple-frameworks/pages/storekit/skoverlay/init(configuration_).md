> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/init(configuration:)](https://developer.apple.com/documentation/storekit/skoverlay/init(configuration:))

# init(configuration:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates an overlay you use to recommend another app on the App Store.

## Declaration

```swift
init(configuration: SKOverlay.Configuration)
```

## Parameters

- `configuration`: The object that represents the overlay’s attributes; for example, its position on the screen.

<a id="Discussion"></a>

## Discussion

Pass an [SKOverlay.AppConfiguration](appconfiguration.md) as the `configuration` parameter if you want to display the overlay in an app. To recommend an App Clip’s corresponding app, pass an [SKOverlay.AppClipConfiguration](appclipconfiguration.md) object to the initializer. For more information, see [Recommending your app to App Clip users](https://developer.apple.com/documentation/appclip/recommending-your-app-to-app-clip-users).

## See Also

### Creating an overlay

- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlay.AppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlay.AppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlay.Configuration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

# initWithConfiguration: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates an overlay you use to recommend another app on the App Store.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(SKOverlayConfiguration *) configuration;
```

## Parameters

- `configuration`: The object that represents the overlay’s attributes; for example, its position on the screen.

<a id="Discussion"></a>

## Discussion

Pass an [SKOverlayAppConfiguration](appconfiguration.md) as the `configuration` parameter if you want to display the overlay in an app. To recommend an App Clip’s corresponding app, pass an [SKOverlayAppClipConfiguration](appclipconfiguration.md) object to the initializer. For more information, see [Recommending your app to App Clip users](https://developer.apple.com/documentation/appclip/recommending-your-app-to-app-clip-users).

## See Also

### Creating an overlay

- [configuration](configuration-swift.property.md): An overlay’s attributes; for example, its position on the screen.
- [SKOverlayAppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlayAppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlayConfiguration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.
