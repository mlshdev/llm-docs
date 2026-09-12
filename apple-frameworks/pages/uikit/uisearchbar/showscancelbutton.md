> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/showscancelbutton](https://developer.apple.com/documentation/uikit/uisearchbar/showscancelbutton)

# showsCancelButton (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the cancel button is displayed.

## Declaration

```swift
var showsCancelButton: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cancel button is displayed if the app is running on iPhone. The value of this property is ignored, and no cancel button is displayed, for apps running on iPad. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [showsBookmarkButton](showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [setShowsCancelButton(\_:animated:)](setshowscancelbutton%28__animated_%29.md): Sets the display state of the cancel button optionally with animation.
- [showsSearchResultsButton](showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [isSearchResultsButtonSelected](issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.

# showsCancelButton (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the cancel button is displayed.

## Declaration

```objectivec
@property (nonatomic) BOOL showsCancelButton;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cancel button is displayed if the app is running on iPhone. The value of this property is ignored, and no cancel button is displayed, for apps running on iPad. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the search interface

- [showsBookmarkButton](showsbookmarkbutton.md): A Boolean value indicating whether the bookmark button is displayed.
- [setShowsCancelButton:animated:](setshowscancelbutton%28__animated_%29.md): Sets the display state of the cancel button optionally with animation.
- [showsSearchResultsButton](showssearchresultsbutton.md): A Boolean value indicating whether the search results button is displayed.
- [searchResultsButtonSelected](issearchresultsbuttonselected.md): A Boolean value indicating whether the search results button is selected.
