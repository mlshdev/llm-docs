> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscollectionlayoutsection/visibleitemsinvalidationhandler

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
