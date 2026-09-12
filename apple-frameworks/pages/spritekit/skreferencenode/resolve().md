> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreferencenode/resolve()](https://developer.apple.com/documentation/spritekit/skreferencenode/resolve())

# resolve() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the reference node’s content and adds it as a new child node.

## Declaration

```swift
func resolve()
```

<a id="Discussion"></a>

## Discussion

The archive is deserialized and the root node is added as a child of the reference node. If this method is called on a reference node whose content is already loaded, the existing node tree is discarded and replaced with a fresh copy of the archive’s data.

SpriteKit calls this method automatically if the scene renders the reference node and the reference node has not previously been loaded.

# resolveReferenceNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the reference node’s content and adds it as a new child node.

## Declaration

```objectivec
- (void) resolveReferenceNode;
```

<a id="Discussion"></a>

## Discussion

The archive is deserialized and the root node is added as a child of the reference node. If this method is called on a reference node whose content is already loaded, the existing node tree is discarded and replaced with a fresh copy of the archive’s data.

SpriteKit calls this method automatically if the scene renders the reference node and the reference node has not previously been loaded.
