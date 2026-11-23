> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/indexpath(for:)

# indexPath(for:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Returns the index path for the specified item.

## Declaration

```swift
func indexPath(for item: any CPListTemplateItem) -> IndexPath?
```

## Parameters

- `item`: A row in the list.

<a id="return-value"></a>

## Return Value

The index path to the item, or `nil` if `item` doesn’t appear in the list. This method configures the [section](https://developer.apple.com/documentation/foundation/nsindexpath/section) and [row](https://developer.apple.com/documentation/foundation/nsindexpath/row) properties of the returned type with the index and row information.

## See Also

### Getting item details

- [itemCount](itemcount.md): The total number of items, across all sections, in the list.

# indexPathForItem: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Returns the index path for the specified item.

## Declaration

```objectivec
- (NSIndexPath *) indexPathForItem:(id<CPListTemplateItem>) item;
```

## Parameters

- `item`: A row in the list.

<a id="return-value"></a>

## Return Value

The index path to the item, or `nil` if `item` doesn’t appear in the list. This method configures the [section](https://developer.apple.com/documentation/foundation/nsindexpath/section) and [row](https://developer.apple.com/documentation/foundation/nsindexpath/row) properties of the returned type with the index and row information.

## See Also

### Getting item details

- [itemCount](itemcount.md): The total number of items, across all sections, in the list.
