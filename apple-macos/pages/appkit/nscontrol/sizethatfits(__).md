> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/sizethatfits(_:)](https://developer.apple.com/documentation/appkit/nscontrol/sizethatfits(_:))

# sizeThatFits(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the control to calculate and return the size that best fits the specified size.

## Declaration

```swift
func sizeThatFits(_ size: NSSize) -> NSSize
```

## Parameters

- `size`: The size for which the control should calculate its best-fitting size.

<a id="return-value"></a>

## Return Value

A new size that fits the receiver’s subviews.

<a id="Discussion"></a>

## Discussion

By default, this method returns the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the receiver.

## See Also

### Resizing the Control

- [controlSize](controlsize-swift.property.md): The size of the control.
- [NSControl.ControlSize](controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeToFit()](sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.

# sizeThatFits: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the control to calculate and return the size that best fits the specified size.

## Declaration

```objectivec
- (NSSize) sizeThatFits:(NSSize) size;
```

## Parameters

- `size`: The size for which the control should calculate its best-fitting size.

<a id="return-value"></a>

## Return Value

A new size that fits the receiver’s subviews.

<a id="Discussion"></a>

## Discussion

By default, this method returns the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the receiver.

## See Also

### Resizing the Control

- [controlSize](controlsize-swift.property.md): The size of the control.
- [NSControlSize](controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [sizeToFit](sizetofit%28%29.md): Resizes the receiver’s frame so that it’s the minimum size needed to contain its cell.
