> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaudionode/init(coder:)](https://developer.apple.com/documentation/spritekit/skaudionode/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells you when to initialize an audio node that has been unarchived.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

<a id="Discussion"></a>

## Discussion

Do not call this initializer directly; it’s called by the system when you should initialize an audio node that has been unarchived.

## See Also

### Initializing Audio Nodes

- [init(avAudioNode:)](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [init(url:)](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells you when to initialize an audio node that has been unarchived.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

<a id="Discussion"></a>

## Discussion

Do not call this initializer directly; it’s called by the system when you should initialize an audio node that has been unarchived.

## See Also

### Initializing Audio Nodes

- [initWithAVAudioNode:](init%28avaudionode_%29-969st.md): Initializes an audio node from an AVFoundation audio node.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes an audio node from an audio asset with the specified filename.
- [initWithURL:](init%28url_%29-8v3q0.md): Initializes an audio node from an audio asset with the specified URL.
