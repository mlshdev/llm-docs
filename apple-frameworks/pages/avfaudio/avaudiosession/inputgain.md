> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/inputgain](https://developer.apple.com/documentation/avfaudio/avaudiosession/inputgain)

# inputGain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The gain applied to inputs associated with the session.

## Declaration

```swift
var inputGain: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property returns a floating point value ranging from `0.0` to `1.0`, where `0.0` represents the lowest gain setting, and `1.0` represents the highest gain setting.

You can observe changes to the value of this property by using key-value observing. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting input gain

- [isInputGainSettable](isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.
- [setInputGain(\_:)](setinputgain%28__%29.md): Changes the input gain to the specified value.

# inputGain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The gain applied to inputs associated with the session.

## Declaration

```objectivec
@property (readonly) float inputGain;
```

<a id="Discussion"></a>

## Discussion

This property returns a floating point value ranging from `0.0` to `1.0`, where `0.0` represents the lowest gain setting, and `1.0` represents the highest gain setting.

You can observe changes to the value of this property by using key-value observing. For more information, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## See Also

### Setting input gain

- [inputGainSettable](isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.
- [setInputGain:error:](setinputgain%28__%29.md): Changes the input gain to the specified value.
