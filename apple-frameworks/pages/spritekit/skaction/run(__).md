> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/run(_:)](https://developer.apple.com/documentation/spritekit/skaction/run(_:))

# run(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that executes a block.

## Declaration

```swift
class func run(_ block: @escaping () -> Void) -> SKAction
```

## Parameters

- `block`: The block to run.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the block is called. This action takes place instantaneously.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [init(named:)](init%28named_%29.md): Creates an action of the given name from an action file.
- [init(named:duration:)](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [init(named:fromURL:)](init%28named_fromurl_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:duration:)](init%28named_fromurl_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customAction(withDuration:actionBlock:)](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [perform(\_:onTarget:)](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

# runBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that executes a block.

## Declaration

```objectivec
+ (SKAction *) runBlock:(dispatch_block_t) block;
```

## Parameters

- `block`: The block to run.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the block is called. This action takes place instantaneously.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [actionNamed:](init%28named_%29.md): Creates an action of the given name from an action file.
- [actionNamed:duration:](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customActionWithDuration:actionBlock:](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [performSelector:onTarget:](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
