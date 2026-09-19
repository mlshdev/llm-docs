> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinputpickerinteraction/init(audiosession:)

# init(audioSession:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

## Declaration

```swift
init(audioSession: AVAudioSession?)
```

## Parameters

- `audioSession`: An optional recording configured audio session. If you provide a non-recording session, the input list will be empty.

<a id="discussion"></a>

## Discussion

Use this initializer when the provided `AVAudioSession` is in .record mode or you plan to switch it to record mode.

If nil session is passed in object will use a sharedInstance from `AVAudioSession`.

## See Also

### Creating an input picker

- [init()](init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.

# initWithAudioSession: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

## Declaration

```objectivec
- (instancetype) initWithAudioSession:(AVAudioSession *) audioSession;
```

## Parameters

- `audioSession`: An optional recording configured audio session. If you provide a non-recording session, the input list will be empty.

<a id="discussion"></a>

## Discussion

Use this initializer when the provided `AVAudioSession` is in .record mode or you plan to switch it to record mode.

If nil session is passed in object will use a sharedInstance from `AVAudioSession`.

## See Also

### Creating an input picker

- [init](init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.
