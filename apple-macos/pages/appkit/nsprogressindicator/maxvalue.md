> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/maxvalue](https://developer.apple.com/documentation/appkit/nsprogressindicator/maxvalue)

# maxValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value for the progress indicator.

## Declaration

```swift
var maxValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a determinate progress indicator goes from `0.0` to `100.0`, so the default value of this property is `100.0`.

An indeterminate progress indicator does not use this value.

## See Also

### Advancing the progress bar

- [increment(by:)](increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [doubleValue](doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](minvalue.md): The minimum value for the progress indicator.

# maxValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value for the progress indicator.

## Declaration

```objectivec
@property double maxValue;
```

<a id="Discussion"></a>

## Discussion

By default, a determinate progress indicator goes from `0.0` to `100.0`, so the default value of this property is `100.0`.

An indeterminate progress indicator does not use this value.

## See Also

### Advancing the progress bar

- [incrementBy:](increment%28by_%29.md): Advances the progress bar of a determinate progress indicator by the specified amount.
- [doubleValue](doublevalue.md): The value that indicates the current extent of the progress indicator.
- [minValue](minvalue.md): The minimum value for the progress indicator.
