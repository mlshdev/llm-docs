> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/itemframe(at:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/itemframe(at:))

# itemFrame(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the frame rectangle for the item located at the specified index.

## Declaration

```swift
func itemFrame(at index: Int) -> NSRect
```

## Parameters

- `index`: The index of the item whose frame rectangle you want to obtain.

<a id="return-value"></a>

## Return Value

The frame rectangle of the item.

## See Also

### Getting Item Information

- [indexOfItem(at:)](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [visibleItemIndexes()](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItem(at:)](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.

# itemFrameAtIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the frame rectangle for the item located at the specified index.

## Declaration

```objectivec
- (NSRect) itemFrameAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item whose frame rectangle you want to obtain.

<a id="return-value"></a>

## Return Value

The frame rectangle of the item.

## See Also

### Getting Item Information

- [indexOfItemAtPoint:](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [visibleItemIndexes](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItemAtIndex:](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.
