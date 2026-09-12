> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-5j4ws](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-5j4ws)

# UINavigationItemRenameDelegate

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Methods an object implements to rename a navigation item.

## Declaration

```swift
@MainActor @preconcurrency protocol UINavigationItemRenameDelegate : AnyObject
```

<a id="overview"></a>

## Overview

A navigation item ([UINavigationItem](uinavigationitem.md)) uses this delegate to determine whether a person can change the navigation item’s title and to handle the rename process.

> **Related Sessions from WWDC22**

>  Session 10069: [Meet desktop-class iPad](https://developer.apple.com/wwdc22/10069)
>
> Session 10070: [Build a desktop-class iPad app](https://developer.apple.com/wwdc22/10070)

## Topics

### Determining rename support

- [navigationItemShouldBeginRenaming(\_:)](uinavigationitemrenamedelegate-5j4ws/navigationitemshouldbeginrenaming%28__%29.md): Asks the delegate whether the navigation item supports renaming.
- [navigationItem(\_:shouldEndRenamingWith:)](uinavigationitemrenamedelegate-5j4ws/navigationitem%28__shouldendrenamingwith_%29.md): Asks the delegate whether to continue or abandon the rename process.

### Handling the rename process

- [navigationItem(\_:willBeginRenamingWith:selectedRange:)](uinavigationitemrenamedelegate-5j4ws/navigationitem%28__willbeginrenamingwith_selectedrange_%29.md): Tells the delegate when the rename process starts.
- [navigationItem(\_:didEndRenamingWith:)](uinavigationitemrenamedelegate-5j4ws/navigationitem%28__didendrenamingwith_%29.md): Tells the delegate when the rename process ends.

## See Also

### Renaming documents

- [renameDelegate](uinavigationitem/renamedelegate-8jiuf.md): The delegate for renaming the navigation item.
