> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/items

# items (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The items in the section.

## Declaration

```swift
var items: [any CPListTemplateItem] { get }
```

<a id="discussion"></a>

## Discussion

CarPlay displays items in the same order as the array in this property. This property contains only [CPListItem](../cplistitem.md), [CPListImageRowItem](../cplistimagerowitem.md), and [CPMessageListItem](../cpmessagelistitem.md) item types.

## See Also

### Locating items in the section

- [index(of:)](index%28of_%29.md): Returns the zero-based index of an item in the section.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index in the section.

# items (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The items in the section.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<CPListTemplateItem>> * items;
```

<a id="discussion"></a>

## Discussion

CarPlay displays items in the same order as the array in this property. This property contains only [CPListItem](../cplistitem.md), [CPListImageRowItem](../cplistimagerowitem.md), and [CPMessageListItem](../cpmessagelistitem.md) item types.

## See Also

### Locating items in the section

- [indexOfItem:](index%28of_%29.md): Returns the zero-based index of an item in the section.
- [itemAtIndex:](item%28at_%29.md): Returns the item at the specified index in the section.
