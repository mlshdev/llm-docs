> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/appconfiguration/init(appidentifier:position:)](https://developer.apple.com/documentation/storekit/skoverlay/appconfiguration/init(appidentifier:position:))

# init(appIdentifier:position:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates an object that represents the attributes of an overlay you use to recommend another app on the App Store.

## Declaration

```swift
init(appIdentifier: String, position: SKOverlay.Position)
```

## Parameters

- `appIdentifier`: The iTunes identifier of the recommended app.
- `position`: The position of the overlay on the screen.

## See Also

### Creating an App Configuration

- [appIdentifier](appidentifier.md): The iTunes identifier of the recommended app.
- [position](position.md): The position of the overlay on the screen.
- [SKOverlay.Position](../position.md): Constants that identify the position of an overlay on the screen.

# initWithAppIdentifier:position: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates an object that represents the attributes of an overlay you use to recommend another app on the App Store.

## Declaration

```objectivec
- (instancetype) initWithAppIdentifier:(NSString *) appIdentifier position:(SKOverlayPosition) position;
```

## Parameters

- `appIdentifier`: The iTunes identifier of the recommended app.
- `position`: The position of the overlay on the screen.

## See Also

### Creating an App Configuration

- [appIdentifier](appidentifier.md): The iTunes identifier of the recommended app.
- [position](position.md): The position of the overlay on the screen.
- [SKOverlayPosition](../position.md): Constants that identify the position of an overlay on the screen.
