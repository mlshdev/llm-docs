> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutsectionvisibleitemsinvalidationhandler](https://developer.apple.com/documentation/appkit/nscollectionlayoutsectionvisibleitemsinvalidationhandler)

# NSCollectionLayoutSectionVisibleItemsInvalidationHandler (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.

## Declaration

```swift
typealias NSCollectionLayoutSectionVisibleItemsInvalidationHandler = ([any NSCollectionLayoutVisibleItem], NSPoint, any NSCollectionLayoutEnvironment) -> Void
```

<a id="Discussion"></a>

## Discussion

Each section of a collection view layout can have a visible items invalidation handler. You use this handler to perform custom animations on the items currently visible within the bounds of that section. The handler is called before each layout cycle, any time an animation occurs in that section due to changes such as adding or removing items, scrolling the section, or rotating the device.

**Swift**

```swift
let section = NSCollectionLayoutSection(group: group)
    
section.visibleItemsInvalidationHandler = { visibleItems, scrollOffset, layoutEnvironment in
    // Perform animations on the visible items.
}
```

**Objective-C**

```objc
NSCollectionLayoutSection *section = [NSCollectionLayoutSection sectionWithGroup:group];

[section setVisibleItemsInvalidationHandler:^(NSArray<id<NSCollectionLayoutVisibleItem>> *visibleItems, CGPoint contentOffset, id<NSCollectionLayoutEnvironment> layoutEnvironment) {
    // Perform animations on the visible items.
}];
```

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.

# NSCollectionLayoutSectionVisibleItemsInvalidationHandler (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.

## Declaration

```objectivec
typedef void (^)(NSArray<id<NSCollectionLayoutVisibleItem>> *, struct CGPoint, id<NSCollectionLayoutEnvironment>) NSCollectionLayoutSectionVisibleItemsInvalidationHandler;
```

<a id="Discussion"></a>

## Discussion

Each section of a collection view layout can have a visible items invalidation handler. You use this handler to perform custom animations on the items currently visible within the bounds of that section. The handler is called before each layout cycle, any time an animation occurs in that section due to changes such as adding or removing items, scrolling the section, or rotating the device.

**Swift**

```swift
let section = NSCollectionLayoutSection(group: group)
    
section.visibleItemsInvalidationHandler = { visibleItems, scrollOffset, layoutEnvironment in
    // Perform animations on the visible items.
}
```

**Objective-C**

```objc
NSCollectionLayoutSection *section = [NSCollectionLayoutSection sectionWithGroup:group];

[section setVisibleItemsInvalidationHandler:^(NSArray<id<NSCollectionLayoutVisibleItem>> *visibleItems, CGPoint contentOffset, id<NSCollectionLayoutEnvironment> layoutEnvironment) {
    // Perform animations on the visible items.
}];
```

## See Also

### Layout updates

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md): An item that’s currently visible within the bounds of a section.
