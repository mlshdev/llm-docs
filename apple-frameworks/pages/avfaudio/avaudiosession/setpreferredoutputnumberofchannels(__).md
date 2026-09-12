> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setpreferredoutputnumberofchannels(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setpreferredoutputnumberofchannels(_:))

# setPreferredOutputNumberOfChannels(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred number of output channels for the current route.

## Declaration

```swift
func setPreferredOutputNumberOfChannels(_ count: Int) throws
```

## Parameters

- `count`: The number of output channels you want to use.

<a id="Discussion"></a>

## Discussion

This method requests a change to the number of output channels. To determine whether the change has taken effect, use the [outputNumberOfChannels](outputnumberofchannels.md) property. For details, see Configuring standard audio behaviors. Requesting output channels less than one or greater than that returned by the [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md) results in an error. Only certain devices and peripherals support this feature.

Set the preferred number of output channels only after setting the audio session’s category and mode, and activating the session.

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.

# setPreferredOutputNumberOfChannels:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the preferred number of output channels for the current route.

## Declaration

```objectivec
- (BOOL) setPreferredOutputNumberOfChannels:(NSInteger) count error:(NSError **) outError;
```

## Parameters

- `count`: The number of output channels you want to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method requests a change to the number of output channels. To determine whether the change has taken effect, use the [outputNumberOfChannels](outputnumberofchannels.md) property. For details, see Configuring standard audio behaviors. Requesting output channels less than one or greater than that returned by the [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md) results in an error. Only certain devices and peripherals support this feature.

Set the preferred number of output channels only after setting the audio session’s category and mode, and activating the session.

## See Also

### Setting the number of output channels

- [preferredOutputNumberOfChannels](preferredoutputnumberofchannels.md): The preferred number of output channels for the current route.
- [outputNumberOfChannels](outputnumberofchannels.md): The number of audio output channels.
- [maximumOutputNumberOfChannels](maximumoutputnumberofchannels.md): The maximum number of output channels available for the current audio route.
