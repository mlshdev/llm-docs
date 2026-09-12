> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/visibleitemindexes()](https://developer.apple.com/documentation/quartz/ikimagebrowserview/visibleitemindexes())

# visibleItemIndexes() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the indexes of the view’s currently visible items.

## Declaration

```swift
func visibleItemIndexes() -> IndexSet!
```

<a id="return-value"></a>

## Return Value

A set containing the indexes.

## See Also

### Getting Item Information

- [indexOfItem(at:)](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrame(at:)](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [cellForItem(at:)](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.

# visibleItemIndexes (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the indexes of the view’s currently visible items.

## Declaration

```objectivec
- (NSIndexSet *) visibleItemIndexes;
```

<a id="return-value"></a>

## Return Value

A set containing the indexes.

## See Also

### Getting Item Information

- [indexOfItemAtPoint:](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrameAtIndex:](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [cellForItemAtIndex:](cellforitem%28at_%29.md): Returns the browser cell for the item at the specified index.
