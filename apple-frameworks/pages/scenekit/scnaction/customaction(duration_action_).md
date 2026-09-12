> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/customaction(duration:action:)](https://developer.apple.com/documentation/scenekit/scnaction/customaction(duration:action:))

# customAction(duration:action:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that executes a block periodically over a specified duration.

## Declaration

```swift
class func customAction(duration seconds: TimeInterval, action block: @escaping @Sendable (SCNNode, CGFloat) -> Void) -> SCNAction
```

## Parameters

- `seconds`: The duration of the action, in seconds.
- `block`: The block to run. The block takes the following parameters:

  - ***node***: The node on which the action is running.
  - ***elapsedTime***: The amount of time that has passed since the action began executing.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit calls the block repeatedly until the action’s duration expires. For each call, SceneKit computes the elapsed time and passes it to the block.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [run(\_:)](run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [javaScriptAction(withScript:duration:)](javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.

# customActionWithDuration:actionBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that executes a block periodically over a specified duration.

## Declaration

```objectivec
+ (SCNAction *) customActionWithDuration:(NSTimeInterval) seconds actionBlock:(void (^)(SCNNode *node, CGFloat elapsedTime)) block;
```

## Parameters

- `seconds`: The duration of the action, in seconds.
- `block`: The block to run. The block takes the following parameters:

  - ***node***: The node on which the action is running.
  - ***elapsedTime***: The amount of time that has passed since the action began executing.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit calls the block repeatedly until the action’s duration expires. For each call, SceneKit computes the elapsed time and passes it to the block.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [runBlock:](run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [javaScriptActionWithScript:duration:](javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.
