> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/observedprogress](https://developer.apple.com/documentation/appkit/nsprogressindicator/observedprogress)

# observedProgress (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The progress object to use for updating the progress view.

## Declaration

```swift
var observedProgress: Progress? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property when you want the progress view to automatically update its progress value using the information it receives from the [Progress](https://developer.apple.com/documentation/foundation/progress) object. Setting this property also modifies the [isIndeterminate](isindeterminate.md), [minValue](minvalue.md), [maxValue](maxvalue.md), and [doubleValue](doublevalue.md) properties of the indicator. Set the property to `nil` when you want to update the progress manually. The default value of this property is `nil`.

For more information on configuring a progress object, see [Progress](https://developer.apple.com/documentation/foundation/progress).

# observedProgress (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The progress object to use for updating the progress view.

## Declaration

```objectivec
@property (strong, nullable) NSProgress * observedProgress;
```

<a id="Discussion"></a>

## Discussion

Set this property when you want the progress view to automatically update its progress value using the information it receives from the [NSProgress](https://developer.apple.com/documentation/foundation/progress) object. Setting this property also modifies the [indeterminate](isindeterminate.md), [minValue](minvalue.md), [maxValue](maxvalue.md), and [doubleValue](doublevalue.md) properties of the indicator. Set the property to `nil` when you want to update the progress manually. The default value of this property is `nil`.

For more information on configuring a progress object, see [NSProgress](https://developer.apple.com/documentation/foundation/progress).
