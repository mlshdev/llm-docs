> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/reloadrootpagecontrollers(withnames:contexts:orientation:pageindex:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/reloadrootpagecontrollers(withnames:contexts:orientation:pageindex:))

# reloadRootPageControllers(withNames:contexts:orientation:pageIndex:) (Swift)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 4.0+

Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.

## Declaration

```swift
class func reloadRootPageControllers(withNames names: [String], contexts: [Any]?, orientation: WKPageOrientation, pageIndex: Int)
```

## Parameters

- `names`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the identifier of an interface controller in your storyboard file. The order of the identifiers in the array defines the order of the corresponding interface controllers in the page-based interface.
- `contexts`: An array of objects of type `id`. Use this parameter to pass context objects to each of the interface controllers loaded into the page-based interface. The first object in the array is passed to the first interface controller, the second object is passed to the second interface controller, and so on.
- `orientation`: The scrolling orientation for the page-based interface. For a list of valid values, see [WKPageOrientation](../wkpageorientation.md).
- `pageIndex`: The index of the page that the system displays in the page-based interface.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Call this method to create or modify your app’s page-based interface:

- **At launch time.** Use this method to customize the set of pages you want displayed, and to set the scrolling orientation.
- **At runtime.** Use this method to change the active set of pages or the orientation, adding or removing pages as needed.

## See Also

### Navigating a page-based interface

- [WKPageOrientation](../wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [reloadRootControllers(withNamesAndContexts:)](reloadrootcontrollers%28withnamesandcontexts_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [becomeCurrentPage()](becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.

# reloadRootPageControllersWithNames:contexts:orientation:pageIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 4.0+

Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.

## Declaration

```objectivec
+ (void) reloadRootPageControllersWithNames:(NSArray<NSString *> *) names contexts:(NSArray *) contexts orientation:(WKPageOrientation) orientation pageIndex:(NSInteger) pageIndex;
```

## Parameters

- `names`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the identifier of an interface controller in your storyboard file. The order of the identifiers in the array defines the order of the corresponding interface controllers in the page-based interface.
- `contexts`: An array of objects of type `id`. Use this parameter to pass context objects to each of the interface controllers loaded into the page-based interface. The first object in the array is passed to the first interface controller, the second object is passed to the second interface controller, and so on.
- `orientation`: The scrolling orientation for the page-based interface. For a list of valid values, see [WKPageOrientation](../wkpageorientation.md).
- `pageIndex`: The index of the page that the system displays in the page-based interface.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

Call this method to create or modify your app’s page-based interface:

- **At launch time.** Use this method to customize the set of pages you want displayed, and to set the scrolling orientation.
- **At runtime.** Use this method to change the active set of pages or the orientation, adding or removing pages as needed.

## See Also

### Navigating a page-based interface

- [WKPageOrientation](../wkpageorientation.md): Scrolling orientations for page-based interfaces.
- [becomeCurrentPage](becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.
