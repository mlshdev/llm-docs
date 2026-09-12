> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/cellforitem(at:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/cellforitem(at:))

# cellForItem(at:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the browser cell for the item at the specified index.

## Declaration

```swift
func cellForItem(at index: Int) -> IKImageBrowserCell!
```

## Parameters

- `index`: The index.

<a id="return-value"></a>

## Return Value

The browser cell at the specified index.

<a id="Discussion"></a>

## Discussion

Subclasses must not override this method.

## See Also

### Getting Item Information

- [indexOfItem(at:)](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrame(at:)](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes()](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.

# cellForItemAtIndex: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the browser cell for the item at the specified index.

## Declaration

```objectivec
- (IKImageBrowserCell *) cellForItemAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index.

<a id="return-value"></a>

## Return Value

The browser cell at the specified index.

<a id="Discussion"></a>

## Discussion

Subclasses must not override this method.

## See Also

### Getting Item Information

- [indexOfItemAtPoint:](indexofitem%28at_%29.md): Returns the index of the item at the specified location.
- [itemFrameAtIndex:](itemframe%28at_%29.md): Returns the frame rectangle for the item located at the specified index.
- [visibleItemIndexes](visibleitemindexes%28%29.md): Returns the indexes of the view’s currently visible items.
