> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/becomecurrentpage()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/becomecurrentpage())

# becomeCurrentPage() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays the interface controller in the page-based interface.

## Declaration

```swift
func becomeCurrentPage()
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use this method to make the current interface controller become the current page of a page-based interface. The current interface controller must be installed in the page-based interface. After calling this method, WatchKit animates the interface controller into view.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Navigating a page-based interface

- [reloadRootPageControllers(withNames:contexts:orientation:pageIndex:)](reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [WKPageOrientation](../wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [reloadRootControllers(withNamesAndContexts:)](reloadrootcontrollers%28withnamesandcontexts_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface.

# becomeCurrentPage (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Displays the interface controller in the page-based interface.

## Declaration

```objectivec
- (void) becomeCurrentPage;
```

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Use this method to make the current interface controller become the current page of a page-based interface. The current interface controller must be installed in the page-based interface. After calling this method, WatchKit animates the interface controller into view.

Always call this method from your WatchKit extension’s main thread.

## See Also

### Navigating a page-based interface

- [reloadRootPageControllersWithNames:contexts:orientation:pageIndex:](reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [WKPageOrientation](../wkpageorientation.md): Scrolling orientations for page-based interfaces.
