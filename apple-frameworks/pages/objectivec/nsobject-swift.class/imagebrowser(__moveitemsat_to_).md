> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:moveitemsat:to:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:moveitemsat:to:))

# imageBrowser(\_:moveItemsAt:to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that the specified items should be moved to the specified destination.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, moveItemsAt indexes: IndexSet!, to destinationIndex: Int) -> Bool
```

## Parameters

- `aBrowser`: An image browser view.
- `indexes`: The indexes of the items that should be reordered.
- `destinationIndex`: The starting index of the destination the items should be moved to.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if successful; [NO](../no.md) otherwise.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked by the image browser view after  Image Kit determines  that a reordering operation should be applied. The data source should update itself by reordering its elements.

## See Also

### Related Documentation

- [setAllowsReordering(\_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setallowsreordering%28_:%29): Controls whether the user can reorder items.

# imageBrowser:moveItemsAtIndexes:toIndex: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that the specified items should be moved to the specified destination.

## Declaration

```objectivec
- (BOOL) imageBrowser:(IKImageBrowserView *) aBrowser moveItemsAtIndexes:(NSIndexSet *) indexes toIndex:(NSUInteger) destinationIndex;
```

## Parameters

- `aBrowser`: An image browser view.
- `indexes`: The indexes of the items that should be reordered.
- `destinationIndex`: The starting index of the destination the items should be moved to.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if successful; [NO](../no.md) otherwise.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked by the image browser view after  Image Kit determines  that a reordering operation should be applied. The data source should update itself by reordering its elements.

## See Also

### Related Documentation

- [setAllowsReordering:](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setallowsreordering%28_:%29): Controls whether the user can reorder items.
