> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/showsscopebar](https://developer.apple.com/documentation/uikit/uisearchbar/showsscopebar)

# showsScopeBar (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies whether the scope bar is displayed.

## Declaration

```swift
var showsScopeBar: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the search bar is owned by a [UISearchController](../uisearchcontroller.md), then setting this property implicitly sets the search controller’s [automaticallyShowsScopeBar](../uisearchcontroller/automaticallyshowsscopebar.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [setShowsScope(\_:animated:)](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.

# showsScopeBar (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies whether the scope bar is displayed.

## Declaration

```objectivec
@property (nonatomic) BOOL showsScopeBar;
```

<a id="Discussion"></a>

## Discussion

If the search bar is owned by a [UISearchController](../uisearchcontroller.md), then setting this property implicitly sets the search controller’s [automaticallyShowsScopeBar](../uisearchcontroller/automaticallyshowsscopebar.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [setShowsScopeBar:animated:](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.
