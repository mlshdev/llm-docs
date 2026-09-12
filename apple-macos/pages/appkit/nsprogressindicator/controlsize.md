> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/controlsize](https://developer.apple.com/documentation/appkit/nsprogressindicator/controlsize)

# controlSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the progress indicator.

## Declaration

```swift
var controlSize: NSControl.ControlSize { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSCell](../nscell.md) for possible values.

## See Also

### Setting the appearance

- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# controlSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the progress indicator.

## Declaration

```objectivec
@property NSControlSize controlSize;
```

<a id="Discussion"></a>

## Discussion

See [NSCell](../nscell.md) for possible values.

## See Also

### Setting the appearance

- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
