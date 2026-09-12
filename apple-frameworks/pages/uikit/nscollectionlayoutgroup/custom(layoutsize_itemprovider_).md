> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutgroup/custom(layoutsize:itemprovider:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutgroup/custom(layoutsize:itemprovider:))

# custom(layoutSize:itemProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

## Declaration

```swift
class func custom(layoutSize: NSCollectionLayoutSize, itemProvider: @escaping NSCollectionLayoutGroupCustomItemProvider) -> Self
```

# customGroupWithLayoutSize:itemProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a group of the specified size, with an item provider that creates a custom arrangement for those items.

## Declaration

```objectivec
+ (instancetype) customGroupWithLayoutSize:(NSCollectionLayoutSize *) layoutSize itemProvider:(NSCollectionLayoutGroupCustomItemProvider) itemProvider;
```
