> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/setindicatorimage(_:forpage:)](https://developer.apple.com/documentation/uikit/uipagecontrol/setindicatorimage(_:forpage:))

# setIndicatorImage(\_:forPage:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Registers an override image for the indicator of the specified page.

## Declaration

```swift
func setIndicatorImage(_ image: UIImage?, forPage page: Int)
```

## Parameters

- `image`: The image to use instead of the preferred image. Use `nil` to reset the image to [preferredIndicatorImage](preferredindicatorimage.md).
- `page`: The index of the page. A value that’s greater than or equal to `0` and less than [numberOfPages](numberofpages.md).

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImage(forPage:)](indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImage(forPage:)](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage(\_:forPage:)](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.

# setIndicatorImage:forPage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Registers an override image for the indicator of the specified page.

## Declaration

```objectivec
- (void) setIndicatorImage:(UIImage *) image forPage:(NSInteger) page;
```

## Parameters

- `image`: The image to use instead of the preferred image. Use `nil` to reset the image to [preferredIndicatorImage](preferredindicatorimage.md).
- `page`: The index of the page. A value that’s greater than or equal to `0` and less than [numberOfPages](numberofpages.md).

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [indicatorImageForPage:](indicatorimage%28forpage_%29.md): Returns the override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImageForPage:](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage:forPage:](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.
