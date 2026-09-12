> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpageorientation](https://developer.apple.com/documentation/watchkit/wkpageorientation)

# WKPageOrientation (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

Scrolling orientations for page-based interfaces.

## Declaration

```swift
enum WKPageOrientation
```

## Topics

### Enumeration Cases

- [WKPageOrientation.horizontal](wkpageorientation/horizontal.md): A horizontal page-based scrolling orientation.
- [WKPageOrientation.vertical](wkpageorientation/vertical.md): A vertical page-based scrolling orientation.

### Initializers

- [init(rawValue:)](wkpageorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Navigating a page-based interface

- [reloadRootPageControllers(withNames:contexts:orientation:pageIndex:)](wkinterfacecontroller/reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [reloadRootControllers(withNamesAndContexts:)](wkinterfacecontroller/reloadrootcontrollers%28withnamesandcontexts_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [becomeCurrentPage()](wkinterfacecontroller/becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.

# WKPageOrientation (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

Scrolling orientations for page-based interfaces.

## Declaration

```objectivec
enum WKPageOrientation : NSInteger;
```

## Topics

### Enumeration Cases

- [WKPageOrientationHorizontal](wkpageorientation/horizontal.md): A horizontal page-based scrolling orientation.
- [WKPageOrientationVertical](wkpageorientation/vertical.md): A vertical page-based scrolling orientation.

## See Also

### Navigating a page-based interface

- [reloadRootPageControllersWithNames:contexts:orientation:pageIndex:](wkinterfacecontroller/reloadrootpagecontrollers%28withnames_contexts_orientation_pageindex_%29.md): Loads the specified interface controllers and rebuilds the app’s page-based interface for the given scrolling orientation.
- [becomeCurrentPage](wkinterfacecontroller/becomecurrentpage%28%29.md): Displays the interface controller in the page-based interface.
