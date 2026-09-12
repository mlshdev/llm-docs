> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/reloadrootcontrollers(withnamesandcontexts:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/reloadrootcontrollers(withnamesandcontexts:))

# reloadRootControllers(withNamesAndContexts:)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS

Loads the specified interface controllers and rebuilds the app’s page-based interface.

## Declaration

```swift
@MainActor @preconcurrency class func reloadRootControllers(withNamesAndContexts namesAndContexts: [(name: String, context: AnyObject)])
```

## Parameters

- `namesAndContexts`: An array of tuples. Each tuple must contain the following named elements:

  - **name**: The name of the interface controller you want to display. In your storyboard, the name of an interface controller is stored in the object’s Identifier property, which is located in the attributes inspector. This element must not be `nil`.
  - **context**: An object to pass to the new interface controller. Use the object in this parameter to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may specify `nil` for this element if you want but doing so is not recommended.

<a id="Discussion"></a>

## Discussion

Call this method to reload the pages in your app’s page-based interface:

- **At launch time.** Use this method to customize the set of pages you want displayed.
- **At runtime.** Use it to change the active set of pages, adding or removing pages as needed.

## See Also

### Navigating a page-based interface

- [reloadRootPageControllers(withNames:contexts:orientation:pageIndex:)](reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [WKPageOrientation](../wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [becomeCurrentPage()](becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.
