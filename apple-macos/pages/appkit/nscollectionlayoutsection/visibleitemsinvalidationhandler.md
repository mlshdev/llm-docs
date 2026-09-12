> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsection/visibleitemsinvalidationhandler](https://developer.apple.com/documentation/appkit/nscollectionlayoutsection/visibleitemsinvalidationhandler)

# visibleItemsInvalidationHandler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A closure called before each layout cycle to allow modification of the items in the section immediately before they’re displayed.

## Declaration

```swift
var visibleItemsInvalidationHandler: NSCollectionLayoutSectionVisibleItemsInvalidationHandler? { get set }
```

# visibleItemsInvalidationHandler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A closure called before each layout cycle to allow modification of the items in the section immediately before they’re displayed.

## Declaration

```objectivec
@property (copy, nullable) NSCollectionLayoutSectionVisibleItemsInvalidationHandler visibleItemsInvalidationHandler;
```
