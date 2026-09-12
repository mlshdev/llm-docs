> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isinputgainsettable](https://developer.apple.com/documentation/avfaudio/avaudiosession/isinputgainsettable)

# isInputGainSettable (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can set the input gain.

## Declaration

```swift
var isInputGainSettable: Bool { get }
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the device allows input gain to be changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Not all devices support variable gain; check this property before attempting to set the input gain.

## See Also

### Setting input gain

- [inputGain](inputgain.md): The gain applied to inputs associated with the session.
- [setInputGain(\_:)](setinputgain%28__%29.md): Changes the input gain to the specified value.

# inputGainSettable (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can set the input gain.

## Declaration

```objectivec
@property (readonly, getter=isInputGainSettable) BOOL inputGainSettable;
```

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the device allows input gain to be changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Not all devices support variable gain; check this property before attempting to set the input gain.

## See Also

### Setting input gain

- [inputGain](inputgain.md): The gain applied to inputs associated with the session.
- [setInputGain:error:](setinputgain%28__%29.md): Changes the input gain to the specified value.
