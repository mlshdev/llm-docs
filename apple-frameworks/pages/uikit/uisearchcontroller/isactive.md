> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/isactive](https://developer.apple.com/documentation/uikit/uisearchcontroller/isactive)

# isActive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presented state of the search interface.

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the user taps in the search field of a managed search bar, the search controller automatically displays the search results controller. Usually, you get the value of this property to determine whether the search results are displayed. However, you can set this property to [true](https://developer.apple.com/documentation/swift/true) to force the search interface to appear, even if the user hasn’t tapped in the search field.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsUpdater](searchresultsupdater.md): The object responsible for updating the contents of the search results controller.
- [searchResultsController](searchresultscontroller.md): The view controller that displays the results of the search.

# active (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presented state of the search interface.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

When the user taps in the search field of a managed search bar, the search controller automatically displays the search results controller. Usually, you get the value of this property to determine whether the search results are displayed. However, you can set this property to [true](https://developer.apple.com/documentation/swift/true) to force the search interface to appear, even if the user hasn’t tapped in the search field.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the search results

- [searchBar](searchbar.md): The search bar to install in your interface.
- [searchResultsUpdater](searchresultsupdater.md): The object responsible for updating the contents of the search results controller.
- [searchResultsController](searchresultscontroller.md): The view controller that displays the results of the search.
