> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioroutingarbiter/leave()](https://developer.apple.com/documentation/avfaudio/avaudioroutingarbiter/leave())

# leave() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Stops an app’s participation in audio routing arbitration.

## Declaration

```swift
func leave()
```

<a id="Discussion"></a>

## Discussion

Configure your app to notify the system when the app stops using audio for an undetermined duration. For example, for a Voice over IP (VoIP) app, call this method when the VoIP call ends. Calling this method allows the system to make an informed decision when multiple Apple devices are trying to take ownership of a Bluetooth audio route.

## See Also

### Participating in AirPods Automatic Switching

- [begin(category:completionHandler:)](begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [AVAudioRoutingArbiter.Category](category.md): Categories that describe the general nature of your app’s audio use.

# leaveArbitration (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Stops an app’s participation in audio routing arbitration.

## Declaration

```objectivec
- (void) leaveArbitration;
```

<a id="Discussion"></a>

## Discussion

Configure your app to notify the system when the app stops using audio for an undetermined duration. For example, for a Voice over IP (VoIP) app, call this method when the VoIP call ends. Calling this method allows the system to make an informed decision when multiple Apple devices are trying to take ownership of a Bluetooth audio route.

## See Also

### Participating in AirPods Automatic Switching

- [beginArbitrationWithCategory:completionHandler:](begin%28category_completionhandler_%29.md): Begins routing arbitration to take ownership of a nearby Bluetooth audio route.
- [AVAudioRoutingArbitrationCategory](category.md): Categories that describe the general nature of your app’s audio use.
