> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/init(url:)-8v3q0](https://developer.apple.com/documentation/spritekit/skaudionode/init(url:)-8v3q0)

# init(url:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an audio asset with the specified URL.

## Declaration

```swift
convenience init(url: URL)
```

## Parameters

- `url`: The URL of an audio file.

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

## See Also

### Initializing Audio Nodes

- [init(avAudioNode:)](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [init(coder:)](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.

# initWithURL: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio node from an audio asset with the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of an audio file.

<a id="return-value"></a>

## Return Value

A newly initialized audio node.

## See Also

### Initializing Audio Nodes

- [initWithAVAudioNode:](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [initWithCoder:](init%28coder_%29.md): Tells you when to initialize an audio node that has been unarchived.
