> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/sizetofit()](https://developer.apple.com/documentation/appkit/nscontrol/sizetofit())

# sizeToFit() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

## Declaration

```swift
func sizeToFit()
```

<a id="Discussion"></a>

## Discussion

If you want a multiple-cell custom subclass of `NSControl` to size itself to fit its cells, you must override this method. This method neither redisplays the receiver nor marks it as needing display. You must do this yourself with either the[display()](../nsview/display%28%29.md) or [setNeedsDisplay()](setneedsdisplay%28%29.md) method.

## See Also

### Related Documentation

- [calcSize()](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.

### Resizing the Control

- [controlSize](controlsize-swift.property.md): The size of the control.
- [NSControl.ControlSize](controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeThatFits(\_:)](sizethatfits%28__%29.md): Asks the control to calculate and return the size that best fits the specified size.

# sizeToFit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

## Declaration

```objectivec
- (void) sizeToFit;
```

<a id="Discussion"></a>

## Discussion

If you want a multiple-cell custom subclass of `NSControl` to size itself to fit its cells, you must override this method. This method neither redisplays the receiver nor marks it as needing display. You must do this yourself with either the[display](../nsview/display%28%29.md) or [setNeedsDisplay](setneedsdisplay%28%29.md) method.

## See Also

### Related Documentation

- [calcSize](calcsize%28%29.md): Deprecated. Recomputes any internal sizing information for the receiver, if necessary.

### Resizing the Control

- [controlSize](controlsize-swift.property.md): The size of the control.
- [NSControlSize](controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeThatFits:](sizethatfits%28__%29.md): Asks the control to calculate and return the size that best fits the specified size.
