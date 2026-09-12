> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/perform(_:ontarget:)](https://developer.apple.com/documentation/spritekit/skaction/perform(_:ontarget:))

# perform(\_:onTarget:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that calls a method on an object.

## Declaration

```swift
class func perform(_ selector: Selector, onTarget target: Any) -> SKAction
```

## Parameters

- `selector`: The selector of the method to call.
- `target`: The target object.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

The action object maintains a strong reference to the target object.

When the action executes, the target object’s method is called. This action occurs instantaneously.

This action is not reversible; the reverse of this action calls the selector again.

## See Also

### Creating Custom Actions

- [init(named:)](init%28named_%29.md): Creates an action of the given name from an action file.
- [init(named:duration:)](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [init(named:fromURL:)](init%28named_fromurl_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:duration:)](init%28named_fromurl_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customAction(withDuration:actionBlock:)](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [run(\_:)](run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

# performSelector:onTarget: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that calls a method on an object.

## Declaration

```objectivec
+ (SKAction *) performSelector:(SEL) selector onTarget:(id) target;
```

## Parameters

- `selector`: The selector of the method to call.
- `target`: The target object.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

The action object maintains a strong reference to the target object.

When the action executes, the target object’s method is called. This action occurs instantaneously.

This action is not reversible; the reverse of this action calls the selector again.

## See Also

### Creating Custom Actions

- [actionNamed:](init%28named_%29.md): Creates an action of the given name from an action file.
- [actionNamed:duration:](init%28named_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customActionWithDuration:actionBlock:](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [runBlock:](run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
