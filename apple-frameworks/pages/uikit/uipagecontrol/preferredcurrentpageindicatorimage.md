> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/preferredcurrentpageindicatorimage](https://developer.apple.com/documentation/uikit/uipagecontrol/preferredcurrentpageindicatorimage)

# preferredCurrentPageIndicatorImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The preferred image for the current page indicator.

## Declaration

```swift
var preferredCurrentPageIndicatorImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

When `nil`, the page control uses [preferredIndicatorImage](preferredindicatorimage.md) as its current page indicator.

The default value of this property is `nil`.

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImage(forPage:)](indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [setIndicatorImage(\_:forPage:)](setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [currentPageIndicatorImage(forPage:)](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage(\_:forPage:)](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.

# preferredCurrentPageIndicatorImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The preferred image for the current page indicator.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * preferredCurrentPageIndicatorImage;
```

<a id="Discussion"></a>

## Discussion

When `nil`, the page control uses [preferredIndicatorImage](preferredindicatorimage.md) as its current page indicator.

The default value of this property is `nil`.

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImageForPage:](indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [setIndicatorImage:forPage:](setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [currentPageIndicatorImageForPage:](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage:forPage:](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.
