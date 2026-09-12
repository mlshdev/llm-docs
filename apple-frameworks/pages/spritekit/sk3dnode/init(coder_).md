> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/init(coder:)](https://developer.apple.com/documentation/spritekit/sk3dnode/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells you when to initialize a 3D node that has been unarchived.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

<a id="Discussion"></a>

## Discussion

Do not call this function directly; it is called by the system when you should initialize a 3D node that has been unarchived.

## See Also

### Creating 3D Nodes

- [init(viewportSize:)](init%28viewportsize_%29.md): Initializes a new 3D node.

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells you when to initialize a 3D node that has been unarchived.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

<a id="Discussion"></a>

## Discussion

Do not call this function directly; it is called by the system when you should initialize a 3D node that has been unarchived.

## See Also

### Creating 3D Nodes

- [nodeWithViewportSize:](nodewithviewportsize_.md): Creates and initializes a new 3D node.
- [initWithViewportSize:](init%28viewportsize_%29.md): Initializes a new 3D node.
