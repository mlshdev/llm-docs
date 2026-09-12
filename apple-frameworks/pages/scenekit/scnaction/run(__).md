> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/run(_:)](https://developer.apple.com/documentation/scenekit/scnaction/run(_:))

# run(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that executes a block.

## Declaration

```swift
class func run(_ block: @escaping @Sendable (SCNNode) -> Void) -> SCNAction
```

## Parameters

- `block`: The block to run. The block takes a single parameter:

  - **node**: The node on which the action is running.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit calls the block. This action takes place instantaneously.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customAction(duration:action:)](customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.
- [javaScriptAction(withScript:duration:)](javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.

# runBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that executes a block.

## Declaration

```objectivec
+ (SCNAction *) runBlock:(void (^)(SCNNode *node)) block;
```

## Parameters

- `block`: The block to run. The block takes a single parameter:

  - **node**: The node on which the action is running.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, SceneKit calls the block. This action takes place instantaneously.

This action is not reversible; the reverse action executes the same block.

## See Also

### Creating Custom Actions

- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customActionWithDuration:actionBlock:](customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.
- [javaScriptActionWithScript:duration:](javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.
