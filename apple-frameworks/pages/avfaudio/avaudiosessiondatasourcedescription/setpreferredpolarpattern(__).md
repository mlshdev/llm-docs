> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription/setpreferredpolarpattern(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/setpreferredpolarpattern(_:))

# setPreferredPolarPattern(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Selects the preferred directivity configuration for the data source.

## Declaration

```swift
func setPreferredPolarPattern(_ pattern: AVAudioSession.PolarPattern?) throws
```

## Parameters

- `pattern`: The directivity configuration to use.

<a id="Discussion"></a>

## Discussion

Calling this method requests a change to the selected polar pattern. To determine whether the change has taken effect, inspect the [selectedPolarPattern](selectedpolarpattern.md) property.

If the data source and its owning port are in use, using this method to change the directivity configuration is likely to result in a route reconfiguration.

Set a preferred polar pattern only after setting the audio session’s category and mode, and activating the session.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [AVAudioSession.PolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

# setPreferredPolarPattern:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Selects the preferred directivity configuration for the data source.

## Declaration

```objectivec
- (BOOL) setPreferredPolarPattern:(AVAudioSessionPolarPattern) pattern error:(NSError **) outError;
```

## Parameters

- `pattern`: The directivity configuration to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a request was successfully made, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Calling this method requests a change to the selected polar pattern. To determine whether the change has taken effect, inspect the [selectedPolarPattern](selectedpolarpattern.md) property.

If the data source and its owning port are in use, using this method to change the directivity configuration is likely to result in a route reconfiguration.

Set a preferred polar pattern only after setting the audio session’s category and mode, and activating the session.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [AVAudioSessionPolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.
