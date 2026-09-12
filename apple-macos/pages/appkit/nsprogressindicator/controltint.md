> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/controltint](https://developer.apple.com/documentation/appkit/nsprogressindicator/controltint)

# controlTint (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

The progress indicator’s control tint.

> The controlTint property is not respected on 10.15 and later

## Declaration

```swift
var controlTint: NSControlTint { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSCell](../nscell.md) for possible values.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [isBezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [isIndeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit()](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [isDisplayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.

# controlTint (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 14.0)

The progress indicator’s control tint.

> The controlTint property is not respected on 10.15 and later

## Declaration

```objectivec
@property NSControlTint controlTint;
```

<a id="Discussion"></a>

## Discussion

See [NSCell](../nscell.md) for possible values.

## See Also

### Setting the appearance

- [controlSize](controlsize.md): The size of the progress indicator.
- [bezeled](isbezeled.md): Deprecated. A Boolean that indicates whether the progress indicator’s frame has a three-dimensional bezel.
- [indeterminate](isindeterminate.md): A Boolean that indicates whether the progress indicator is indeterminate.
- [style](style-swift.property.md): The style of the progress indicator (bar or spinning).
- [sizeToFit](sizetofit%28%29.md): This action method resizes the progress indicator to an appropriate size depending on the value of [style](style-swift.property.md).
- [displayedWhenStopped](isdisplayedwhenstopped.md): A Boolean that indicates whether the progress indicator hides itself when it isn’t animating.
