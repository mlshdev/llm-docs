> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/item(at:)

# item(at:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the item at the specified index in the section.

## Declaration

```swift
func item(at index: Int) -> any CPListTemplateItem
```

## Parameters

- `index`: The item’s zero-based index in the section. If you specify an index outside of the bounds of the [items](items.md) array, this method raises an exception.

<a id="return-value"></a>

## Return Value

The item at the specified index.

## See Also

### Locating items in the section

- [items](items.md): The items in the section.
- [index(of:)](index%28of_%29.md): Returns the zero-based index of an item in the section.

# itemAtIndex: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the item at the specified index in the section.

## Declaration

```objectivec
- (id<CPListTemplateItem>) itemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The item’s zero-based index in the section. If you specify an index outside of the bounds of the [items](items.md) array, this method raises an exception.

<a id="return-value"></a>

## Return Value

The item at the specified index.

## See Also

### Locating items in the section

- [items](items.md): The items in the section.
- [indexOfItem:](index%28of_%29.md): Returns the zero-based index of an item in the section.
