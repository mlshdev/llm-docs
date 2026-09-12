> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuver/junctionimage](https://developer.apple.com/documentation/carplay/cpmaneuver/junctionimage)

# junctionImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image that represents an upcoming junction.

## Declaration

```swift
var junctionImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a junction image to show more visual details about the maneuver, such as the lane a driver should be in when making a turn.

You use a named image asset to supply variants for both dark and light interface styles, and initialize the image using [init(named:)](https://developer.apple.com/documentation/uikit/uiimage/init%28named:%29). CarPlay then selects the correct image for the current interface style.

> **Note**

>  The maximum image size is 140 x 100 points. CarPlay scales a larger image to fit while maintaining its aspect ratio.

## See Also

### Providing junction images

- [dashboardJunctionImage](dashboardjunctionimage.md): An image for the CarPlay dashboard that represents an upcoming junction.

# junctionImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An image that represents an upcoming junction.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * junctionImage;
```

<a id="Discussion"></a>

## Discussion

Provide a junction image to show more visual details about the maneuver, such as the lane a driver should be in when making a turn.

You use a named image asset to supply variants for both dark and light interface styles, and initialize the image using [imageNamed:](https://developer.apple.com/documentation/uikit/uiimage/init%28named:%29). CarPlay then selects the correct image for the current interface style.

> **Note**

>  The maximum image size is 140 x 100 points. CarPlay scales a larger image to fit while maintaining its aspect ratio.

## See Also

### Providing junction images

- [dashboardJunctionImage](dashboardjunctionimage.md): An image for the CarPlay dashboard that represents an upcoming junction.
