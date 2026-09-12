> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/customaction(withduration:actionblock:)](https://developer.apple.com/documentation/spritekit/skaction/customaction(withduration:actionblock:))

# customAction(withDuration:actionBlock:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that executes a block over a duration.

## Declaration

```swift
class func customAction(withDuration duration: TimeInterval, actionBlock block: @escaping (SKNode, CGFloat) -> Void) -> SKAction
```

## Parameters

- `duration`: The duration of the action, in seconds.
- `block`: The block to run. The block takes the following parameters:

  - **node**: The node on which the action is running.
  - **elapsedTime**: The amount of time that has passed in the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the block is called repeatedly until the action’s duration expires. The elapsed time is computed and passed to the block whenever the block is called.

This action is not reversible; the reverse action executes the same block.

The following Swift code shows how you can create a custom action to update an attribute of an [SKShader](../skshader.md) attached to a sprite node.

```swift
let customAction = SKAction.customAction(withDuration: 2.0) {
    node, elapsedTime in
    
    if let node = node as? SKSpriteNode {
        node.setValue(SKAttributeValue(float: Float(elapsedTime)),
                                       forAttribute: "a_time")
    }
}
```

## See Also

### Creating Custom Actions

- [init(named:)](init%28named_%29.md): Creates an action of the given name from an action file.
- [init(named:duration:)](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [init(named:fromURL:)](init%28named_fromurl_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:duration:)](init%28named_fromurl_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [perform(\_:onTarget:)](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [run(\_:)](run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

# customActionWithDuration:actionBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that executes a block over a duration.

## Declaration

```objectivec
+ (SKAction *) customActionWithDuration:(NSTimeInterval) duration actionBlock:(void (^)(SKNode *node, CGFloat elapsedTime)) block;
```

## Parameters

- `duration`: The duration of the action, in seconds.
- `block`: The block to run. The block takes the following parameters:

  - **node**: The node on which the action is running.
  - **elapsedTime**: The amount of time that has passed in the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the block is called repeatedly until the action’s duration expires. The elapsed time is computed and passed to the block whenever the block is called.

This action is not reversible; the reverse action executes the same block.

The following Swift code shows how you can create a custom action to update an attribute of an [SKShader](../skshader.md) attached to a sprite node.

```swift
let customAction = SKAction.customAction(withDuration: 2.0) {
    node, elapsedTime in
    
    if let node = node as? SKSpriteNode {
        node.setValue(SKAttributeValue(float: Float(elapsedTime)),
                                       forAttribute: "a_time")
    }
}
```

## See Also

### Creating Custom Actions

- [actionNamed:](init%28named_%29.md): Creates an action of the given name from an action file.
- [actionNamed:duration:](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [performSelector:onTarget:](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [runBlock:](run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
