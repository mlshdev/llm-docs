> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistsection/index(of:)](https://developer.apple.com/documentation/carplay/cplistsection/index(of:))

# index(of:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the index of the specified item.

## Declaration

```swift
func index(of item: any CPListTemplateItem) -> Int
```

## Parameters

- `item`: The item to find in the section.

<a id="return-value"></a>

## Return Value

The item’s index in the section, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) if the section doesn’t contain the item.

## See Also

### Getting Items

- [items](items.md): The list of items for the section.
- [item(at:)](item%28at_%29.md): Returns the item at the specified index.

# indexOfItem: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Returns the index of the specified item.

## Declaration

```objectivec
- (NSUInteger) indexOfItem:(id<CPListTemplateItem>) item;
```

## Parameters

- `item`: The item to find in the section.

<a id="return-value"></a>

## Return Value

The item’s index in the section, or [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h) if the section doesn’t contain the item.

## See Also

### Getting Items

- [items](items.md): The list of items for the section.
- [itemAtIndex:](item%28at_%29.md): Returns the item at the specified index.
