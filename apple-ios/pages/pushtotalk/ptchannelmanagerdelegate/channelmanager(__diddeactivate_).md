> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pushtotalk/ptchannelmanagerdelegate/channelmanager(_:diddeactivate:)

# channelManager(\_:didDeactivate:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer the audio session deactivated.

## Declaration

```swift
func channelManager(_ channelManager: PTChannelManager, didDeactivate audioSession: AVAudioSession)
```

## Parameters

- `channelManager`: The channel manager.
- `audioSession`: The audio session that deactivated.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

## See Also

### Activating and deactivating the audio session

- [channelManager(\_:didActivate:)](channelmanager%28__didactivate_%29.md): Tells the observer the audio session activated.

# channelManager:didDeactivateAudioSession: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Tells the observer the audio session deactivated.

## Declaration

```objectivec
- (void) channelManager:(PTChannelManager *) channelManager didDeactivateAudioSession:(AVAudioSession *) audioSession;
```

## Parameters

- `channelManager`: The channel manager.
- `audioSession`: The audio session that deactivated.

## Mentioned In

- [Creating a Push to Talk app](../creating-a-push-to-talk-app.md)

## See Also

### Activating and deactivating the audio session

- [channelManager:didActivateAudioSession:](channelmanager%28__didactivate_%29.md): Tells the observer the audio session activated.
