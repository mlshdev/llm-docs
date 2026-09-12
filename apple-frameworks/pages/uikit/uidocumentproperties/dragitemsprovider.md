> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentproperties/dragitemsprovider](https://developer.apple.com/documentation/uikit/uidocumentproperties/dragitemsprovider)

# dragItemsProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that provides drag items that represent the document.

## Declaration

```swift
var dragItemsProvider: ((any UIDragSession) -> [UIDragItem])? { get set }
```

<a id="Discussion"></a>

## Discussion

To support drag and drop, assign a closure that returns an array of drag items that represent the document contents. When you set this property, a person can drag and drop the document from the navigation item’s title menu.

# dragItemsProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that provides drag items that represent the document.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<UIDragItem *> * (^dragItemsProvider)(id<UIDragSession>);
```

<a id="Discussion"></a>

## Discussion

To support drag and drop, assign a closure that returns an array of drag items that represent the document contents. When you set this property, a person can drag and drop the document from the navigation item’s title menu.
