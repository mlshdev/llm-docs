> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistsection/index(of:)

# index(of:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the zero-based index of an item in the section.

## Declaration

```swift
func index(of item: any CPListTemplateItem) -> Int
```

## Parameters

- `item`: The item to find in the section.

<a id="return-value"></a>

## Return Value

The zero-based index of the item, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) if the item isn’t in the section.

<a id="discussion"></a>

## Discussion

Call this method to retrieve the index of an item in the [items](items.md) array.

## See Also

### Locating items in the section

- [items](items.md): The items in the section.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index in the section.

# indexOfItem: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the zero-based index of an item in the section.

## Declaration

```objectivec
- (NSUInteger) indexOfItem:(id<CPListTemplateItem>) item;
```

## Parameters

- `item`: The item to find in the section.

<a id="return-value"></a>

## Return Value

The zero-based index of the item, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) if the item isn’t in the section.

<a id="discussion"></a>

## Discussion

Call this method to retrieve the index of an item in the [items](items.md) array.

## See Also

### Locating items in the section

- [items](items.md): The items in the section.
- [itemAtIndex:](item%28at_%29.md): Returns the item at the specified index in the section.
