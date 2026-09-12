> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/doublevalue](https://developer.apple.com/documentation/appkit/nsprogressindicator/doublevalue)

# doubleValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value that indicates the current extent of the progress indicator.

## Declaration

```swift
var doubleValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a determinate progress indicator goes from `0.0` to `100.0`. If the progress bar has advanced halfway across the view, this value would be `50.0`.

An indeterminate progress indicator does not use this value.

## See Also

### Advancing the progress bar

- [increment(by:)](increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [minValue](minvalue.md): The minimum value for the progress indicator.
- [maxValue](maxvalue.md): The maximum value for the progress indicator.

# doubleValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The value that indicates the current extent of the progress indicator.

## Declaration

```objectivec
@property double doubleValue;
```

<a id="Discussion"></a>

## Discussion

By default, a determinate progress indicator goes from `0.0` to `100.0`. If the progress bar has advanced halfway across the view, this value would be `50.0`.

An indeterminate progress indicator does not use this value.

## See Also

### Advancing the progress bar

- [incrementBy:](increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [minValue](minvalue.md): The minimum value for the progress indicator.
- [maxValue](maxvalue.md): The maximum value for the progress indicator.
