> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/isselected()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/isselected())

# isSelected() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the cell is selected.

## Declaration

```swift
func isSelected() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell is selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Selection Handling

- [selectionFrame()](selectionframe%28%29.md): Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](../ikimagebrowserview.md).

# isSelected (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns whether the cell is selected.

## Declaration

```objectivec
- (BOOL) isSelected;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell is selected, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Selection Handling

- [selectionFrame](selectionframe%28%29.md): Returns the receiver’s selection frame rectangle, which defines the position of the selection rectangle in its [IKImageBrowserView](../ikimagebrowserview.md).
