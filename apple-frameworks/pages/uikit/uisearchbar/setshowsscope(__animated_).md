> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setshowsscope(_:animated:)](https://developer.apple.com/documentation/uikit/uisearchbar/setshowsscope(_:animated:))

# setShowsScope(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Specifies whether the scope bar is displayed, optionally using an animation.

## Declaration

```swift
func setShowsScope(_ show: Bool, animated animate: Bool)
```

## Parameters

- `show`: A Boolean value that indicates whether the scope bar is shown.
- `animate`: A Boolean value that indicates whether the scope bar animates when it appears and disappears.

<a id="Discussion"></a>

## Discussion

If the search bar is owned by a [UISearchController](../uisearchcontroller.md), then calling this method implicitly sets the search controller’s [automaticallyShowsScopeBar](../uisearchcontroller/automaticallyshowsscopebar.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.

# setShowsScopeBar:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Specifies whether the scope bar is displayed, optionally using an animation.

## Declaration

```objectivec
- (void) setShowsScopeBar:(BOOL) show animated:(BOOL) animate;
```

## Parameters

- `show`: A Boolean value that indicates whether the scope bar is shown.
- `animate`: A Boolean value that indicates whether the scope bar animates when it appears and disappears.

<a id="Discussion"></a>

## Discussion

If the search bar is owned by a [UISearchController](../uisearchcontroller.md), then calling this method implicitly sets the search controller’s [automaticallyShowsScopeBar](../uisearchcontroller/automaticallyshowsscopebar.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.
