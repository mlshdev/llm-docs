> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/run(_:onchildwithname:)](https://developer.apple.com/documentation/spritekit/skaction/run(_:onchildwithname:))

# run(\_:onChildWithName:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs an action on a named child object.

## Declaration

```swift
class func run(_ action: SKAction, onChildWithName name: String) -> SKAction
```

## Parameters

- `action`: The action to execute.
- `name`: The name of a child object. See the [name](../sknode/name.md) property on the [SKNode](../sknode.md) object.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Because this action references child nodes by name, it is especially handy for nodes that the scene subclass (or scene delegate) does not maintain a reference to, for example, child nodes that are defined in an `.sks` file.

This action has an instantaneous duration, although the action executed on the child may have a duration of its own. When the action executes, it looks up an appropriate child node and calls its [run(\_:)](../sknode/run%28__%29.md) method, passing in the action to execute.

This action is reversible; it tells the child to execute the reverse of the action specified by the `action` parameter.

# runAction:onChildWithName: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that runs an action on a named child object.

## Declaration

```objectivec
+ (SKAction *) runAction:(SKAction *) action onChildWithName:(NSString *) name;
```

## Parameters

- `action`: The action to execute.
- `name`: The name of a child object. See the [name](../sknode/name.md) property on the [SKNode](../sknode.md) object.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

Because this action references child nodes by name, it is especially handy for nodes that the scene subclass (or scene delegate) does not maintain a reference to, for example, child nodes that are defined in an `.sks` file.

This action has an instantaneous duration, although the action executed on the child may have a duration of its own. When the action executes, it looks up an appropriate child node and calls its [runAction:](../sknode/run%28__%29.md) method, passing in the action to execute.

This action is reversible; it tells the child to execute the reverse of the action specified by the `action` parameter.
