> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/symbolimage](https://developer.apple.com/documentation/carplay/cpmaneuver/symbolimage)

# symbolImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image that represents the maneuver.

## Declaration

```swift
var symbolImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

You use a named image asset to supply variants for both dark and light interface styles, and initialize the image using [init(named:)](https://developer.apple.com/documentation/uikit/uiimage/init%28named:%29). CarPlay then selects the correct image for the current interface style.

## See Also

### Providing symbol images

- [dashboardSymbolImage](dashboardsymbolimage.md): An image for the CarPlay dashboard that represents the maneuver.
- [notificationSymbolImage](notificationsymbolimage.md): An image for notification banners that represents the maneuver.
- [symbolSet](symbolset.md): Deprecated. An image set that represents the maneuver.

# symbolImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image that represents the maneuver.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * symbolImage;
```

<a id="Discussion"></a>

## Discussion

You use a named image asset to supply variants for both dark and light interface styles, and initialize the image using [imageNamed:](https://developer.apple.com/documentation/uikit/uiimage/init%28named:%29). CarPlay then selects the correct image for the current interface style.

## See Also

### Providing symbol images

- [dashboardSymbolImage](dashboardsymbolimage.md): An image for the CarPlay dashboard that represents the maneuver.
- [notificationSymbolImage](notificationsymbolimage.md): An image for notification banners that represents the maneuver.
- [symbolSet](symbolset.md): Deprecated. An image set that represents the maneuver.
