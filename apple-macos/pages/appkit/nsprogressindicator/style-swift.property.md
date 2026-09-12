> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/style-swift.property](https://developer.apple.com/documentation/appkit/nsprogressindicator/style-swift.property)

# style (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The style of the progress indicator (bar or spinning).

## Declaration

```swift
var style: NSProgressIndicator.Style { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSProgressIndicator.Style](style-swift.enum.md) for possible values.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# style (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The style of the progress indicator (bar or spinning).

## Declaration

```objectivec
@property NSProgressIndicatorStyle style;
```

<a id="Discussion"></a>

## Discussion

See [NSProgressIndicatorStyle](style-swift.enum.md) for possible values.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
