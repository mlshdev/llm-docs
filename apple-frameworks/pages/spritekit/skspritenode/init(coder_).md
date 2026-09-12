> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(coder:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when to initialize a sprite from an archive.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

<a id="Discussion"></a>

## Discussion

Don’t call this function directly; the system calls this function when you should initialize your sprite from the argument archived data.

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when to initialize a sprite from an archive.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

<a id="Discussion"></a>

## Discussion

Don’t call this function directly; the system calls this function when you should initialize your sprite from the argument archived data.
