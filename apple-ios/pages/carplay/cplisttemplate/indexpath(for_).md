> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/indexpath(for:)](https://developer.apple.com/documentation/carplay/cplisttemplate/indexpath(for:))

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

- `item`: The item to find in the list.

<a id="return-value"></a>

## Return Value

The item’s index path in the list, or [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) if the list doesn’t contain the item.

## See Also

### Getting Supplementary Information

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [itemCount](itemcount.md): The total number of items, across all sections, in the list.
- [title](title.md): The title that the navigation bar displays when the template is visible.

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

- `item`: The item to find in the list.

<a id="return-value"></a>

## Return Value

The item’s index path in the list, or [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) if the list doesn’t contain the item.

## See Also

### Getting Supplementary Information

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [itemCount](itemcount.md): The total number of items, across all sections, in the list.
- [title](title.md): The title that the navigation bar displays when the template is visible.
