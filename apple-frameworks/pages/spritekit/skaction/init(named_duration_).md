> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/init(named:duration:)](https://developer.apple.com/documentation/spritekit/skaction/init(named:duration:))

# init(named:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file with a new duration.

## Declaration

```swift
init?(named name: String, duration: TimeInterval)
```

## Parameters

- `name`: The name of the action.
- `duration`: The duration of the action.

<a id="return-value"></a>

## Return Value

A new action object.

## See Also

### Creating Custom Actions

- [init(named:)](init%28named_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:)](init%28named_fromurl_%29.md): Creates an action of the given name from an action file.
- [init(named:fromURL:duration:)](init%28named_fromurl_duration_%29.md): Creates an action of the given name from an action file with a new duration.
- [customAction(withDuration:actionBlock:)](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [perform(\_:onTarget:)](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [run(\_:)](run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.

# actionNamed:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action of the given name from an action file with a new duration.

## Declaration

```objectivec
+ (SKAction *) actionNamed:(NSString *) name duration:(NSTimeInterval) duration;
```

## Parameters

- `name`: The name of the action.
- `duration`: The duration of the action.

<a id="return-value"></a>

## Return Value

A new action object.

## See Also

### Creating Custom Actions

- [actionNamed:](init%28named_%29.md): Creates an action of the given name from an action file.
- [customActionWithDuration:actionBlock:](customaction%28withduration_actionblock_%29.md): Creates an action that executes a block over a duration.
- [performSelector:onTarget:](perform%28__ontarget_%29.md): Creates an action that calls a method on an object.
- [runBlock:](run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
