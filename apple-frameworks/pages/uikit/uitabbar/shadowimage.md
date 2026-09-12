> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/shadowimage](https://developer.apple.com/documentation/uikit/uitabbar/shadowimage)

# shadowImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow image to use for the tab bar.

## Declaration

```swift
var shadowImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

For tab bars with custom backgrounds, you can use this property to specify a custom shadow image for your bar. The shadow image is positioned outside the bounds of the tab bar itself, usually above or below the tab bar’s frame rectangle. The exact position depends on the current platform. For example, shadow images are positioned above the tab bar on iPhone and iPad.

You must use this property in conjunction with a custom background image. If the [backgroundImage](backgroundimage.md) property is `nil`, the tab bar ignores the value in this property and uses a default shadow.

# shadowImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow image to use for the tab bar.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * shadowImage;
```

<a id="Discussion"></a>

## Discussion

For tab bars with custom backgrounds, you can use this property to specify a custom shadow image for your bar. The shadow image is positioned outside the bounds of the tab bar itself, usually above or below the tab bar’s frame rectangle. The exact position depends on the current platform. For example, shadow images are positioned above the tab bar on iPhone and iPad.

You must use this property in conjunction with a custom background image. If the [backgroundImage](backgroundimage.md) property is `nil`, the tab bar ignores the value in this property and uses a default shadow.
