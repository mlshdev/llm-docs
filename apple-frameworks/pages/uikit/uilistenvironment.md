> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistenvironment](https://developer.apple.com/documentation/uikit/uilistenvironment)

# UIListEnvironment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that indicate the style of the containing list in a collection view or table view.

## Declaration

```swift
enum UIListEnvironment
```

## Topics

### Constants

- [UIListEnvironment.unspecified](uilistenvironment/unspecified.md): A constant that indicates the absence of information about a containing list.
- [UIListEnvironment.none](uilistenvironment/none.md): A constant that indicates there isn’t a containing list.
- [UIListEnvironment.plain](uilistenvironment/plain.md): A constant that indicates the containing list is a plain-style list.
- [UIListEnvironment.grouped](uilistenvironment/grouped.md): A constant that indicates the containing list is a grouped-style list.
- [UIListEnvironment.insetGrouped](uilistenvironment/insetgrouped.md): A constant that indicates the containing list is an inset-grouped-style list.
- [UIListEnvironment.sidebar](uilistenvironment/sidebar.md): A constant that indicates the containing list is a sidebar-style list.
- [UIListEnvironment.sidebarPlain](uilistenvironment/sidebarplain.md): A constant that indicates the containing list is a sidebar-plain-style list.

### Initializers

- [init(rawValue:)](uilistenvironment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving layout environment traits

- [listEnvironment](uitraitcollection/listenvironment.md): The list environment represents whether a given trait collection is from a view in a UITableView or a UICollectionView list section.
- [splitViewControllerLayoutEnvironment](uitraitcollection/splitviewcontrollerlayoutenvironment.md): The split view controller layout environment represents whether an ancestor split view controller is expanded or collapsed.
- [UISplitViewController.LayoutEnvironment](uisplitviewcontroller/layoutenvironment.md): Constants that indicate the current layout of the containing split view controller.
- [tabAccessoryEnvironment](uitraitcollection/tabaccessoryenvironment.md): The tab accessory environment represents whether a given trait collection is from a view in a `UITabAccessory` content view.
- [UITabAccessory.Environment](uitabaccessory/environment.md)

# UIListEnvironment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that indicate the style of the containing list in a collection view or table view.

## Declaration

```objectivec
enum UIListEnvironment : NSInteger;
```

## Topics

### Constants

- [UIListEnvironmentUnspecified](uilistenvironment/unspecified.md): A constant that indicates the absence of information about a containing list.
- [UIListEnvironmentNone](uilistenvironment/none.md): A constant that indicates there isn’t a containing list.
- [UIListEnvironmentPlain](uilistenvironment/plain.md): A constant that indicates the containing list is a plain-style list.
- [UIListEnvironmentGrouped](uilistenvironment/grouped.md): A constant that indicates the containing list is a grouped-style list.
- [UIListEnvironmentInsetGrouped](uilistenvironment/insetgrouped.md): A constant that indicates the containing list is an inset-grouped-style list.
- [UIListEnvironmentSidebar](uilistenvironment/sidebar.md): A constant that indicates the containing list is a sidebar-style list.
- [UIListEnvironmentSidebarPlain](uilistenvironment/sidebarplain.md): A constant that indicates the containing list is a sidebar-plain-style list.

## See Also

### Retrieving layout environment traits

- [listEnvironment](uitraitcollection/listenvironment.md): The list environment represents whether a given trait collection is from a view in a UITableView or a UICollectionView list section.
- [splitViewControllerLayoutEnvironment](uitraitcollection/splitviewcontrollerlayoutenvironment.md): The split view controller layout environment represents whether an ancestor split view controller is expanded or collapsed.
- [UISplitViewControllerLayoutEnvironment](uisplitviewcontroller/layoutenvironment.md): Constants that indicate the current layout of the containing split view controller.
- [tabAccessoryEnvironment](uitraitcollection/tabaccessoryenvironment.md): The tab accessory environment represents whether a given trait collection is from a view in a `UITabAccessory` content view.
- [UITabAccessoryEnvironment](uitabaccessory/environment.md)
