> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutdecorationitem](https://developer.apple.com/documentation/appkit/nscollectionlayoutdecorationitem)

# NSCollectionLayoutDecorationItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object used to add a background to a section of a collection view.

## Declaration

```swift
class NSCollectionLayoutDecorationItem
```

<a id="overview"></a>

## Overview

Each type of decoration item must have a unique element kind. Consider tracking these strings together in a way that makes it straightforward to identify each element, for example:

**Swift**

```swift
struct ElementKind {
    static let badge = "badge-element-kind"
    static let background = "background-element-kind"
    static let sectionHeader = "section-header-element-kind"
    static let sectionFooter = "section-footer-element-kind"
    static let layoutHeader = "layout-header-element-kind"
    static let layoutFooter = "layout-footer-element-kind"
}
```

**Objective-C**

```objc
NSString* const ELEMENT_KIND_BADGE = @"badge-elemn’s-kind";
NSString* const ELEMENT_KIND_BACKGROUND = @"background-element-kind";
NSString* const ELEMENT_KIND_SECTION_HEADER = @"section-header-element-kind";
NSString* const ELEMENT_KIND_SECTION_FOOTER = @"section-footer-element-kind";
NSString* const ELEMENT_KIND_LAYOUT_HEADER = @"layout-header-element-kind";
NSString* const ELEMENT_KIND_LAYOUT_FOOTER = @"layout-footer-element-kind";
```

Add a background to a section by setting that section’s [decorationItems](nscollectionlayoutsection/decorationitems.md) property:

**Swift**

```swift
let sectionBackground = NSCollectionLayoutDecorationItem.background(
        elementKind: ElementKind.background)

section.decorationItems = [sectionBackground]

let layout = UICollectionViewCompositionalLayout(section: section)
layout.register(
    SectionBackgroundDecorationView.self,
    forDecorationViewOfKind: ElementKind.background)
return layout
```

**Objective-C**

```objc
NSCollectionLayoutDecorationItem *sectionBackground = [NSCollectionLayoutDecorationItem backgroundDecorationItemWithElementKind: ELEMENT_KIND_BACKGROUND];

[section setDecorationItems: @[sectionBackground]];

UICollectionViewCompositionalLayout *layout = [[UICollectionViewCompositionalLayout alloc] initWithSection: section];
[layout registerClass: [SectionBackgroundDecorationView class] forDecorationViewOfKind: ELEMENT_KIND_BACKGROUND];
return layout;
```

## Topics

### Creating a background

- [background(elementKind:)](nscollectionlayoutdecorationitem/background%28elementkind_%29.md): Creates a section background with a string to identify the element kind.

### Getting the element kind

- [elementKind](nscollectionlayoutdecorationitem/elementkind.md): A string that identifies the type of decoration item.

### Specifying stacking order

- [zIndex](nscollectionlayoutdecorationitem/zindex.md): The vertical stacking order of the decoration item in relation to other items in the section.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Appearance

- [NSCollectionLayoutBoundarySupplementaryItem](nscollectionlayoutboundarysupplementaryitem.md): An object used to add headers or footers to a collection view.
- [NSCollectionLayoutSupplementaryItem](nscollectionlayoutsupplementaryitem.md): An object used to add an extra visual decoration to an item in a collection view.
- [NSCollectionLayoutAnchor](nscollectionlayoutanchor.md): An object that defines how to attach a supplementary item to an item in a collection view.

# NSCollectionLayoutDecorationItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

An object used to add a background to a section of a collection view.

## Declaration

```objectivec
@interface NSCollectionLayoutDecorationItem : NSCollectionLayoutItem
```

<a id="overview"></a>

## Overview

Each type of decoration item must have a unique element kind. Consider tracking these strings together in a way that makes it straightforward to identify each element, for example:

**Swift**

```swift
struct ElementKind {
    static let badge = "badge-element-kind"
    static let background = "background-element-kind"
    static let sectionHeader = "section-header-element-kind"
    static let sectionFooter = "section-footer-element-kind"
    static let layoutHeader = "layout-header-element-kind"
    static let layoutFooter = "layout-footer-element-kind"
}
```

**Objective-C**

```objc
NSString* const ELEMENT_KIND_BADGE = @"badge-elemn’s-kind";
NSString* const ELEMENT_KIND_BACKGROUND = @"background-element-kind";
NSString* const ELEMENT_KIND_SECTION_HEADER = @"section-header-element-kind";
NSString* const ELEMENT_KIND_SECTION_FOOTER = @"section-footer-element-kind";
NSString* const ELEMENT_KIND_LAYOUT_HEADER = @"layout-header-element-kind";
NSString* const ELEMENT_KIND_LAYOUT_FOOTER = @"layout-footer-element-kind";
```

Add a background to a section by setting that section’s [decorationItems](nscollectionlayoutsection/decorationitems.md) property:

**Swift**

```swift
let sectionBackground = NSCollectionLayoutDecorationItem.background(
        elementKind: ElementKind.background)

section.decorationItems = [sectionBackground]

let layout = UICollectionViewCompositionalLayout(section: section)
layout.register(
    SectionBackgroundDecorationView.self,
    forDecorationViewOfKind: ElementKind.background)
return layout
```

**Objective-C**

```objc
NSCollectionLayoutDecorationItem *sectionBackground = [NSCollectionLayoutDecorationItem backgroundDecorationItemWithElementKind: ELEMENT_KIND_BACKGROUND];

[section setDecorationItems: @[sectionBackground]];

UICollectionViewCompositionalLayout *layout = [[UICollectionViewCompositionalLayout alloc] initWithSection: section];
[layout registerClass: [SectionBackgroundDecorationView class] forDecorationViewOfKind: ELEMENT_KIND_BACKGROUND];
return layout;
```

## Topics

### Creating a background

- [backgroundDecorationItemWithElementKind:](nscollectionlayoutdecorationitem/background%28elementkind_%29.md): Creates a section background with a string to identify the element kind.

### Getting the element kind

- [elementKind](nscollectionlayoutdecorationitem/elementkind.md): A string that identifies the type of decoration item.

### Specifying stacking order

- [zIndex](nscollectionlayoutdecorationitem/zindex.md): The vertical stacking order of the decoration item in relation to other items in the section.

## Relationships

### Inherits From

- [NSCollectionLayoutItem](nscollectionlayoutitem.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Appearance

- [NSCollectionLayoutBoundarySupplementaryItem](nscollectionlayoutboundarysupplementaryitem.md): An object used to add headers or footers to a collection view.
- [NSCollectionLayoutSupplementaryItem](nscollectionlayoutsupplementaryitem.md): An object used to add an extra visual decoration to an item in a collection view.
- [NSCollectionLayoutAnchor](nscollectionlayoutanchor.md): An object that defines how to attach a supplementary item to an item in a collection view.
