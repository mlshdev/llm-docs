> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/indexofitem(at:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/indexofitem(at:))

# indexOfItem(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the item at the specified location.

## Declaration

```swift
func indexOfItem(at point: NSPoint) -> Int
```

## Parameters

- `point`: The location of the item.

<a id="return-value"></a>

## Return Value

The index of the item or `NSNotFound` if no item at this location.

## See Also

### Getting Item Information

- [itemFrame(at:)](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes()](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItem(at:)](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.

# indexOfItemAtPoint: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the index of the item at the specified location.

## Declaration

```objectivec
- (NSInteger) indexOfItemAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The location of the item.

<a id="return-value"></a>

## Return Value

The index of the item or `NSNotFound` if no item at this location.

## See Also

### Getting Item Information

- [itemFrameAtIndex:](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
- [cellForItemAtIndex:](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.
