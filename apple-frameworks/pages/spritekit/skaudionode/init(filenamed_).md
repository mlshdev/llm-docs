> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/init(filenamed:)](https://developer.apple.com/documentation/spritekit/skaudionode/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an audio asset with the specified filename.

## Declaration

```swift
convenience init(fileNamed name: String)
```

## Parameters

- `name`: A file containing an [AVAudioNode](../../avfaudio/avaudionode.md).

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

<a id="Discussion"></a>

## Discussion

The named file containing the audio asset must reside within the main bundle.

## See Also

### Initializing Audio Nodes

- [init(avAudioNode:)](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [init(url:)](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.

# initWithFileNamed: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an audio asset with the specified filename.

## Declaration

```objectivec
- (instancetype) initWithFileNamed:(NSString *) name;
```

## Parameters

- `name`: A file containing an [AVAudioNode](../../avfaudio/avaudionode.md).

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

<a id="Discussion"></a>

## Discussion

The named file containing the audio asset must reside within the main bundle.

## See Also

### Initializing Audio Nodes

- [initWithAVAudioNode:](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [initWithURL:](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.
