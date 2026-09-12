> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowsercell/highlightcolor(in:)](https://developer.apple.com/documentation/appkit/nsbrowsercell/highlightcolor(in:))

# highlightColor(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the highlight color that the receiver wants to display.

## Declaration

```swift
func highlightColor(in controlView: NSView) -> NSColor?
```

## Parameters

- `controlView`: The view for which to return the highlight color.

<a id="return-value"></a>

## Return Value

The highlight color.

## See Also

### Managing Browser Cell State

- [reset()](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set()](set%28%29.md): Highlights the receiver and sets its state.
- [isLeaf](isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [isLoaded](isloaded.md): A Boolean that indicates whether the cell is ready to display.

# highlightColorInView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the highlight color that the receiver wants to display.

## Declaration

```objectivec
- (NSColor *) highlightColorInView:(NSView *) controlView;
```

## Parameters

- `controlView`: The view for which to return the highlight color.

<a id="return-value"></a>

## Return Value

The highlight color.

## See Also

### Managing Browser Cell State

- [reset](reset%28%29.md): Unhighlights the receiver and unsets its state.
- [set](set%28%29.md): Highlights the receiver and sets its state.
- [leaf](isleaf.md): A Boolean that indicates whether the browser cell is a leaf or a branch cell.
- [loaded](isloaded.md): A Boolean that indicates whether the cell is ready to display.
