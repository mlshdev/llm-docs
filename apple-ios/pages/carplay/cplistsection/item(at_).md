> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/item(at:)](https://developer.apple.com/documentation/carplay/cplistsection/item(at:))

# item(at:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the item at the specified index.

## Declaration

```swift
func item(at index: Int) -> any CPListTemplateItem
```

## Parameters

- `index`: The item’s index in the section.

<a id="Discussion"></a>

## Discussion

The index must be within the bounds of the [items](items.md) array, otherwise, your app throws an exception.

## See Also

### Getting Items

- [items](items.md): The list of items for the section.
- [index(of:)](index%28of_%29.md): Returns the index of the specified item.

# itemAtIndex: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the item at the specified index.

## Declaration

```objectivec
- (id<CPListTemplateItem>) itemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The item’s index in the section.

<a id="Discussion"></a>

## Discussion

The index must be within the bounds of the [items](items.md) array, otherwise, your app throws an exception.

## See Also

### Getting Items

- [items](items.md): The list of items for the section.
- [indexOfItem:](index%28of_%29.md): Returns the index of the specified item.
