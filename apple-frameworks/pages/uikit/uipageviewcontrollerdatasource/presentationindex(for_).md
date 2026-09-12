> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdatasource/presentationindex(for:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdatasource/presentationindex(for:))

# presentationIndex(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the index of the selected item to be reflected in the page indicator.

## Declaration

```swift
optional func presentationIndex(for pageViewController: UIPageViewController) -> Int
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The index of the selected item to be reflected in the page indicator.

## See Also

### Supporting a Page Indicator

- [presentationCount(for:)](presentationcount%28for_%29.md): Returns the number of items to be reflected in the page indicator.

# presentationIndexForPageViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the index of the selected item to be reflected in the page indicator.

## Declaration

```objectivec
- (NSInteger) presentationIndexForPageViewController:(UIPageViewController *) pageViewController;
```

## Parameters

- `pageViewController`: The page view controller.

<a id="return-value"></a>

## Return Value

The index of the selected item to be reflected in the page indicator.

## See Also

### Supporting a Page Indicator

- [presentationCountForPageViewController:](presentationcount%28for_%29.md): Returns the number of items to be reflected in the page indicator.
