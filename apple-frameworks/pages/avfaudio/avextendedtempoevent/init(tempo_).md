> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avextendedtempoevent/init(tempo:)](https://developer.apple.com/documentation/avfaudio/avextendedtempoevent/init(tempo:))

# init(tempo:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an extended tempo event.

## Declaration

```swift
init(tempo: Double)
```

## Parameters

- `tempo`: The tempo in beats per minute as a positive value.

<a id="Discussion"></a>

## Discussion

The new tempo begins at the timestamp for this event.

# initWithTempo: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an extended tempo event.

## Declaration

```objectivec
- (instancetype) initWithTempo:(double) tempo;
```

## Parameters

- `tempo`: The tempo in beats per minute as a positive value.

<a id="Discussion"></a>

## Discussion

The new tempo begins at the timestamp for this event.
