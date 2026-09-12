> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/configuration-swift.property](https://developer.apple.com/documentation/storekit/skoverlay/configuration-swift.property)

# configuration (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An overlay’s attributes; for example, its position on the screen.

## Declaration

```swift
@NSCopying var configuration: SKOverlay.Configuration { get }
```

## See Also

### Creating an overlay

- [init(configuration:)](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [SKOverlay.AppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlay.AppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlay.Configuration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.

# configuration (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An overlay’s attributes; for example, its position on the screen.

## Declaration

```objectivec
@property (copy, readonly) SKOverlayConfiguration * configuration;
```

## See Also

### Creating an overlay

- [initWithConfiguration:](init%28configuration_%29.md): Creates an overlay you use to recommend another app on the App Store.
- [SKOverlayAppConfiguration](appconfiguration.md): An object that represents the attributes of an overlay you use to recommend another app on the App Store.
- [SKOverlayAppClipConfiguration](appclipconfiguration.md): An object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding full app.
- [SKOverlayConfiguration](configuration-swift.class.md): The abstract superclass for all classes that represent an overlay’s attributes.
