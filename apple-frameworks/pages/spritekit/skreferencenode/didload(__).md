> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreferencenode/didload(_:)](https://developer.apple.com/documentation/spritekit/skreferencenode/didload(_:))

# didLoad(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A method called by SpriteKit after the reference node’s contents are loaded.

## Declaration

```swift
func didLoad(_ node: SKNode?)
```

## Parameters

- `node`: The deserialized content’s root node.

<a id="Discussion"></a>

## Discussion

This method is called after the referenced content is added as a child of the reference node. Override this method in a subclass to implement custom loading behavior.

# didLoadReferenceNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A method called by SpriteKit after the reference node’s contents are loaded.

## Declaration

```objectivec
- (void) didLoadReferenceNode:(SKNode *) node;
```

## Parameters

- `node`: The deserialized content’s root node.

<a id="Discussion"></a>

## Discussion

This method is called after the referenced content is added as a child of the reference node. Override this method in a subclass to implement custom loading behavior.
