> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/setshowscancelbutton(_:animated:)](https://developer.apple.com/documentation/uikit/uisearchbar/setshowscancelbutton(_:animated:))

# setShowsCancelButton(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the display state of the cancel button optionally with animation.

## Declaration

```swift
func setShowsCancelButton(_ showsCancelButton: Bool, animated: Bool)
```

## Parameters

- `showsCancelButton`: [true](https://developer.apple.com/documentation/swift/true) to display the cancel button, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to use animation to change the display state of the cancel button, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Cancel buttons are not displayed for apps running on iPad, even when you specify [true](https://developer.apple.com/documentation/swift/true) for the `showsCancelButton` parameter

## See Also

### Configuring the search interface

- [showsBookmarkButton](showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [showsCancelButton](showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.
- [showsSearchResultsButton](showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [isSearchResultsButtonSelected](issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.

# setShowsCancelButton:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the display state of the cancel button optionally with animation.

## Declaration

```objectivec
- (void) setShowsCancelButton:(BOOL) showsCancelButton animated:(BOOL) animated;
```

## Parameters

- `showsCancelButton`: [true](https://developer.apple.com/documentation/swift/true) to display the cancel button, otherwise [false](https://developer.apple.com/documentation/swift/false).
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to use animation to change the display state of the cancel button, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Cancel buttons are not displayed for apps running on iPad, even when you specify [true](https://developer.apple.com/documentation/swift/true) for the `showsCancelButton` parameter

## See Also

### Configuring the search interface

- [showsBookmarkButton](showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [showsCancelButton](showscancelbutton.md): A Boolean value indicating whether the cancel button is displayed.
- [showsSearchResultsButton](showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [searchResultsButtonSelected](issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.
