> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredinputnumberofchannels(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredinputnumberofchannels(_:))

# setPreferredInputNumberOfChannels(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred number of input channels for the current route.

## Declaration

```swift
func setPreferredInputNumberOfChannels(_ count: Int) throws
```

## Parameters

- `count`: The number of input channels you want to use.

<a id="Discussion"></a>

## Discussion

This method requests a change to the number of input channels. To determine whether the change has taken effect, query or key-value observe the [inputNumberOfChannels](inputnumberofchannels.md) property.

Requesting input channels less than one or greater than that returned by the [maximumInputNumberOfChannels](maximuminputnumberofchannels.md) results in an error.

Set the preferred number of input channels only after setting the audio session’s category and mode, and activating the session.

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.

# setPreferredInputNumberOfChannels:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred number of input channels for the current route.

## Declaration

```objectivec
- (BOOL) setPreferredInputNumberOfChannels:(NSInteger) count error:(NSError **) outError;
```

## Parameters

- `count`: The number of input channels you want to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method requests a change to the number of input channels. To determine whether the change has taken effect, query or key-value observe the [inputNumberOfChannels](inputnumberofchannels.md) property.

Requesting input channels less than one or greater than that returned by the [maximumInputNumberOfChannels](maximuminputnumberofchannels.md) results in an error.

Set the preferred number of input channels only after setting the audio session’s category and mode, and activating the session.

## See Also

### Setting the number of input channels

- [preferredInputNumberOfChannels](preferredinputnumberofchannels.md): The preferred number of input channels for the current route.
- [inputNumberOfChannels](inputnumberofchannels.md): The number of audio input channels for the current route.
- [maximumInputNumberOfChannels](maximuminputnumberofchannels.md): The maximum number of input channels available for the current audio route.
