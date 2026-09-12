> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/selectionframe()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/selectionframe())

# selectionFrame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```swift
func selectionFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The cells selection frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the position of the selection frame.

## See Also

### Selection Handling

- [isSelected()](isselected%28%29.md): Returns whether the cell is selected.

# selectionFrame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```objectivec
- (NSRect) selectionFrame;
```

<a id="return-value"></a>

## Return Value

The cells selection frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to customize the position of the selection frame.

## See Also

### Selection Handling

- [isSelected](isselected%28%29.md): Returns whether the cell is selected.
