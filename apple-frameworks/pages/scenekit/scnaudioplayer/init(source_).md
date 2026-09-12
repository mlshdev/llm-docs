> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudioplayer/init(source:)](https://developer.apple.com/documentation/scenekit/scnaudioplayer/init(source:))

# init(source:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes an audio player for playing the specified simple audio source.

## Declaration

```swift
init(source: SCNAudioSource)
```

## Parameters

- `source`: An audio source object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

Using this initializer is typically not necessary. Instead, call the [audioPlayerWithSource:](audioplayerwithsource_.md) method, which returns a cached audio player object if one for the specified audio source has already been created and is available for use.

## See Also

### Creating an Audio Player

- [init(avAudioNode:)](init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.

# initWithSource: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio player for playing the specified simple audio source.

## Declaration

```objectivec
- (instancetype) initWithSource:(SCNAudioSource *) source;
```

## Parameters

- `source`: An audio source object.

<a id="return-value"></a>

## Return Value

A positional audio player object.

<a id="Discussion"></a>

## Discussion

Using this initializer is typically not necessary. Instead, call the [audioPlayerWithSource:](audioplayerwithsource_.md) method, which returns a cached audio player object if one for the specified audio source has already been created and is available for use.

## See Also

### Creating an Audio Player

- [initWithAVAudioNode:](init%28avaudionode_%29-4u514.md): Initializes an audio player for playing the specified AVFoundation audio node.
- [audioPlayerWithSource:](audioplayerwithsource_.md): Deprecated. Returns an audio player (creating one if necessary) to play a simple audio source.
- [audioPlayerWithAVAudioNode:](audioplayerwithavaudionode_.md): Deprecated. Returns an audio player (creating one if necessary) to play an audio node.
