> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/init(avaudionode:)-969st](https://developer.apple.com/documentation/spritekit/skaudionode/init(avaudionode:)-969st)

# init(avAudioNode:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an AVFoundation audio node.

## Declaration

```swift
init(avAudioNode node: AVAudioNode?)
```

## Parameters

- `node`: An [AVAudioNode](../../avfaudio/avaudionode.md) object that holds an [AVAudioEngine](../../avfaudio/avaudioengine.md) sound graph from a single sound source or URL.

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

## See Also

### Initializing Audio Nodes

- [init(fileNamed:)](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [init(url:)](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.

# initWithAVAudioNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an AVFoundation audio node.

## Declaration

```objectivec
- (instancetype) initWithAVAudioNode:(AVAudioNode *) node;
```

## Parameters

- `node`: An [AVAudioNode](../../avfaudio/avaudionode.md) object that holds an [AVAudioEngine](../../avfaudio/avaudioengine.md) sound graph from a single sound source or URL.

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

## See Also

### Initializing Audio Nodes

- [initWithFileNamed:](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [initWithURL:](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.
