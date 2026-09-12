> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/init(avaudionode:)-4u514](https://developer.apple.com/documentation/scenekit/scnaudioplayer/init(avaudionode:)-4u514)

# init(avAudioNode:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes an audio player for playing the specified AVFoundation audio node.

## Declaration

```swift
init(avAudioNode audioNode: AVAudioNode)
```

## Parameters

- `audioNode`: An audio node object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

Using this initializer is typically not necessary. Instead, call the [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md) method, which returns a cached audio player object if one for the specified [AVAudioNode](../../avfaudio/avaudionode.md) object has already been created and is available for use.

## See Also

### Creating an Audio Player

- [init(source:)](init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.

# initWithAVAudioNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio player for playing the specified AVFoundation audio node.

## Declaration

```objectivec
- (instancetype) initWithAVAudioNode:(AVAudioNode *) audioNode;
```

## Parameters

- `audioNode`: An audio node object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

Using this initializer is typically not necessary. Instead, call the [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md) method, which returns a cached audio player object if one for the specified [AVAudioNode](../../avfaudio/avaudionode.md) object has already been created and is available for use.

## See Also

### Creating an Audio Player

- [initWithSource:](init%28source_%29.md): Initializes an audio player for playing the specified simple audio source.
- [audioPlayerWithSource:](audioplayerwithsource_.md): Deprecated. Returns an audio player (creating one if necessary) to play a simple audio source.
- [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md): Deprecated. Returns an audio player (creating one if necessary) to play an audio node.
