> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdatasource/presentationcount(for:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdatasource/presentationcount(for:))

# presentationCount(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the number of items to be reflected in the page indicator.

## Declaration

```swift
optional func presentationCount(for pageViewController: UIPageViewController) -> Int
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The number of items to be reflected in the page indicator.

## See Also

### Supporting a Page Indicator

- [presentationIndex(for:)](presentationindex%28for_%29.md): Returns the index of the selected item to be reflected in the page indicator.

# presentationCountForPageViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the number of items to be reflected in the page indicator.

## Declaration

```objectivec
- (NSInteger) presentationCountForPageViewController:(UIPageViewController *) pageViewController;
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The number of items to be reflected in the page indicator.

## See Also

### Supporting a Page Indicator

- [presentationIndexForPageViewController:](presentationindex%28for_%29.md): Returns the index of the selected item to be reflected in the page indicator.
