> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutsectionvisibleitemsinvalidationhandler](https://developer.apple.com/documentation/uikit/nscollectionlayoutsectionvisibleitemsinvalidationhandler)

# NSCollectionLayoutSectionVisibleItemsInvalidationHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure called before each layout cycle to allow modification of items in a section immediately before they’re displayed.

## Declaration

```swift
typealias NSCollectionLayoutSectionVisibleItemsInvalidationHandler = ([any NSCollectionLayoutVisibleItem], CGPoint, any NSCollectionLayoutEnvironment) -> Void
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
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.

# NSCollectionLayoutSectionVisibleItemsInvalidationHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
- [UICollectionViewUpdateItem](uicollectionviewupdateitem.md): An object that describes a single change to make to an item in a collection view.
- [UICollectionViewFocusUpdateContext](uicollectionviewfocusupdatecontext.md): A context object that stores information specific to a focus update in a collection view.
- [UICollectionViewLayoutInvalidationContext](uicollectionviewlayoutinvalidationcontext.md): A context object that declares which parts of your layout need to be updated when the layout is invalidated.
