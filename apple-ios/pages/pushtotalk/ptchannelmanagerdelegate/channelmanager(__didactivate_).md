> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didactivate:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:didactivate:))

# channelManager(\_:didActivate:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer the audio session activated.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, didActivate audioSession: AVAudioSession)
```

## Parameters

- `channelManager`: The channel manager.
- `audioSession`: The audio session that activated.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

Before recording and transmitting audio, wait for the framework to call this method. The framework calls the method when the audio session is active and set to the correct priority, and allows for recording audio even if the app is in the background. The framework doesn’t call the method if the channel transmission mode is [PTTransmissionMode.fullDuplex](../pttransmissionmode/fullduplex.md), and already has an active audio session because it’s receiving audio from a remote participant when a transmission begins.

## See Also

### Activating and deactivating the audio session

- [channelManager(\_:didDeactivate:)](channelmanager%28__diddeactivate_%29.md): Tells the observer the audio session deactivated.

# channelManager:didActivateAudioSession: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer the audio session activated.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager didActivateAudioSession:(AVAudioSession *) audioSession;
```

## Parameters

- `channelManager`: The channel manager.
- `audioSession`: The audio session that activated.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

<a id="Discussion"></a>

## Discussion

Before recording and transmitting audio, wait for the framework to call this method. The framework calls the method when the audio session is active and set to the correct priority, and allows for recording audio even if the app is in the background. The framework doesn’t call the method if the channel transmission mode is [PTTransmissionModeFullDuplex](../pttransmissionmode/fullduplex.md), and already has an active audio session because it’s receiving audio from a remote participant when a transmission begins.

## See Also

### Activating and deactivating the audio session

- [channelManager:didDeactivateAudioSession:](channelmanager%28__diddeactivate_%29.md): Tells the observer the audio session deactivated.
