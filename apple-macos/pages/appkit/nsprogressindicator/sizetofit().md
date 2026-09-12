> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/sizetofit()](https://developer.apple.com/documentation/appkit/nsprogressindicator/sizetofit())

# sizeToFit() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).

## Declaration

```swift
func sizeToFit()
```

<a id="Discussion"></a>

## Discussion

Use this after you use [style](style-swift.property.md) to re-size the progress indicator.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# sizeToFit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).

## Declaration

```objectivec
- (void) sizeToFit;
```

<a id="Discussion"></a>

## Discussion

Use this after you use [style](style-swift.property.md) to re-size the progress indicator.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [controlTint](controltint.md): Deprecated. The progress indicator’s control tint.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
