> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioroutingarbiter/begin(category:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudioroutingarbiter/begin(category:completionhandler:))

# begin(category:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Begins routing arbitration to take ownership of a nearby Bluetooth audio route.

## Declaration

```swift
func begin(category: AVAudioRoutingArbiter.Category, completionHandler handler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func begin(category: AVAudioRoutingArbiter.Category) async throws -> Bool
```

## Parameters

- `category`: A category that describes how the app uses audio.
- `handler`: A completion handler the system calls asynchronously when the system completes audio routing arbitration. This closure takes the following parameters:

  - **defaultDeviceChanged**: A Boolean value that indicates whether the system switched the AirPods to the macOS device.
  - **error**: An error object that indicates why the request failed, or [nil](../../objectivec/nil-227m0.md) if the request succeeded.

<a id="discussion"></a>

## Discussion

Call this method to tell the operating system to arbitrate with nearby Apple devices to take ownership of a supported Bluetooth audio device. When arbitration completes, the system calls the completion handler, passing a Boolean that indicates whether the audio device changed. In either case, begin using audio as normal.

## See Also

### Participating in AirPods Automatic Switching

- [AVAudioRoutingArbiter.Category](category.md): Categories that describe the general nature of your app’s audio use.
- [leave()](leave%28%29.md): Stops an app’s participation in audio routing arbitration.

# beginArbitrationWithCategory:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Begins routing arbitration to take ownership of a nearby Bluetooth audio route.

## Declaration

```objectivec
- (void) beginArbitrationWithCategory:(AVAudioRoutingArbitrationCategory) category completionHandler:(void (^)(BOOL defaultDeviceChanged, NSError *error)) handler;
```

## Parameters

- `category`: A category that describes how the app uses audio.
- `handler`: A completion handler the system calls asynchronously when the system completes audio routing arbitration. This closure takes the following parameters:

  - **defaultDeviceChanged**: A Boolean value that indicates whether the system switched the AirPods to the macOS device.
  - **error**: An error object that indicates why the request failed, or [nil](../../objectivec/nil-227m0.md) if the request succeeded.

<a id="discussion"></a>

## Discussion

Call this method to tell the operating system to arbitrate with nearby Apple devices to take ownership of a supported Bluetooth audio device. When arbitration completes, the system calls the completion handler, passing a Boolean that indicates whether the audio device changed. In either case, begin using audio as normal.

## See Also

### Participating in AirPods Automatic Switching

- [AVAudioRoutingArbitrationCategory](category.md): Categories that describe the general nature of your app’s audio use.
- [leaveArbitration](leave%28%29.md): Stops an app’s participation in audio routing arbitration.
