> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setinputgain(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setinputgain(_:))

# setInputGain(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Changes the input gain to the specified value.

## Declaration

```swift
func setInputGain(_ gain: Float) throws
```

## Parameters

- `gain`: The new gain value, which must be in the range `0.0` to `1.0`, where `0.0` represents the lowest gain setting and `1.0` represents the highest gain setting.

<a id="Discussion"></a>

## Discussion

Before calling this method, check the value in the [isInputGainSettable](isinputgainsettable.md) property to make sure the input gain level is settable for the current inputs.

## See Also

### Setting input gain

- [inputGain](inputgain.md): The gain applied to inputs associated with the session.
- [isInputGainSettable](isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.

# setInputGain:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Changes the input gain to the specified value.

## Declaration

```objectivec
- (BOOL) setInputGain:(float) gain error:(NSError **) outError;
```

## Parameters

- `gain`: The new gain value, which must be in the range `0.0` to `1.0`, where `0.0` represents the lowest gain setting and `1.0` represents the highest gain setting.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the new gain value was set successfully, [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Before calling this method, check the value in the [inputGainSettable](isinputgainsettable.md) property to make sure the input gain level is settable for the current inputs.

## See Also

### Setting input gain

- [inputGain](inputgain.md): The gain applied to inputs associated with the session.
- [inputGainSettable](isinputgainsettable.md): A Boolean value that indicates whether you can set the input gain.
