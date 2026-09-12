> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureslider/value](https://developer.apple.com/documentation/avfoundation/avcaptureslider/value)

# value (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The current value of the slider.

## Declaration

```swift
var value: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is the slider’s minimum value. You may set a value only if it’s within the slider’s minimum and maximum values, otherwise the system throws an exception.

> **Important**

>  Only modify a slider’s value from the same dispatch queue that you specified in the control’s [setActionQueue:action:](setactionqueue_action_.md) method.

## See Also

### Accessing the control value

- [prominentValues](prominentvalues-199dz.md): Values in this array may receive unique visual representations or behaviors.
- [localizedValueFormat](localizedvalueformat.md): A localized string that defines the presentation of the slider’s value.

# value (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The current value of the slider.

## Declaration

```objectivec
@property (nonatomic, assign) float value;
```

<a id="Discussion"></a>

## Discussion

The default value is the slider’s minimum value. You may set a value only if it’s within the slider’s minimum and maximum values, otherwise the system throws an exception.

> **Important**

>  Only modify a slider’s value from the same dispatch queue that you specified in the control’s [setActionQueue:action:](setactionqueue_action_.md) method.

## See Also

### Accessing the control value

- [prominentValues](prominentvalues-7usgc.md): Values in this array may receive unique visual representations or behaviors.
- [localizedValueFormat](localizedvalueformat.md): A localized string that defines the presentation of the slider’s value.
