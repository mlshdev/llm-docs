> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsection/visibleitemsinvalidationhandler](https://developer.apple.com/documentation/uikit/nscollectionlayoutsection/visibleitemsinvalidationhandler)

# visibleItemsInvalidationHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A closure called before each layout cycle to allow modification of the items in the section immediately before they’re displayed.

## Declaration

```swift
var visibleItemsInvalidationHandler: NSCollectionLayoutSectionVisibleItemsInvalidationHandler? { get set }
```

# visibleItemsInvalidationHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A closure called before each layout cycle to allow modification of the items in the section immediately before they’re displayed.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSCollectionLayoutSectionVisibleItemsInvalidationHandler visibleItemsInvalidationHandler;
```
