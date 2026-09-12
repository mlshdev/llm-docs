> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutgroup/custom(layoutsize:itemprovider:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutgroup/custom(layoutsize:itemprovider:))

# custom(layoutSize:itemProvider:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

## Declaration

```swift
class func custom(layoutSize: NSCollectionLayoutSize, itemProvider: @escaping NSCollectionLayoutGroupCustomItemProvider) -> Self
```

# customGroupWithLayoutSize:itemProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

## Declaration

```objectivec
+ (instancetype) customGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize itemProvider:(NSCollectionLayoutGroupCustomItemProvider) itemProvider;
```
