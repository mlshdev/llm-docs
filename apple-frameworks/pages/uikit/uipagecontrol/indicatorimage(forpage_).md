> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/indicatorimage(forpage:)](https://developer.apple.com/documentation/uikit/uipagecontrol/indicatorimage(forpage:))

# indicatorImage(forPage:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the override image for the indicator of the specified page.

## Declaration

```swift
func indicatorImage(forPage page: Int) -> UIImage?
```

## Parameters

- `page`: The index of the page. A value that’s greater than or equal to `0` and less than [numberOfPages](numberofpages.md).

<a id="return-value"></a>

## Return Value

The override image, or `nil` if you haven’t overidden the image for the specified page number.

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [setIndicatorImage(\_:forPage:)](setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImage(forPage:)](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage(\_:forPage:)](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.

# indicatorImageForPage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the override image for the indicator of the specified page.

## Declaration

```objectivec
- (UIImage *) indicatorImageForPage:(NSInteger) page;
```

## Parameters

- `page`: The index of the page. A value that’s greater than or equal to `0` and less than [numberOfPages](numberofpages.md).

<a id="return-value"></a>

## Return Value

The override image, or `nil` if you haven’t overidden the image for the specified page number.

## See Also

### Managing the indicator images

- [preferredIndicatorImage](preferredindicatorimage.md): The preferred image for indicators.
- [setIndicatorImage:forPage:](setindicatorimage%28__forpage_%29.md): Registers an override image for the indicator of the specified page.
- [preferredCurrentPageIndicatorImage](preferredcurrentpageindicatorimage.md): The preferred image for the current page indicator.
- [currentPageIndicatorImageForPage:](currentpageindicatorimage%28forpage_%29.md): Returns the override image for the current page indicator of the specified page.
- [setCurrentPageIndicatorImage:forPage:](setcurrentpageindicatorimage%28__forpage_%29.md): Registers an override image for the current page indicator of the specified page.
