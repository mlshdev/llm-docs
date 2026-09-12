> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/items](https://developer.apple.com/documentation/carplay/cplistsection/items)

# items (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of items for the section.

## Declaration

```swift
var items: [any CPListTemplateItem] { get }
```

## See Also

### Getting Items

- [index(of:)](index%28of_%29.md): Returns the index of the specified item.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index.

# items (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The list of items for the section.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<CPListTemplateItem>> * items;
```

## See Also

### Getting Items

- [indexOfItem:](index%28of_%29.md): Returns the index of the specified item.
- [itemAtIndex:](item%28at_%29.md): Returns the item at the specified index.
