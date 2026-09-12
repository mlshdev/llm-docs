> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/javascriptaction(withscript:duration:)](https://developer.apple.com/documentation/scenekit/scnaction/javascriptaction(withscript:duration:))

# javaScriptAction(withScript:duration:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that executes a JavaScript script periodically over a specified duration.

## Declaration

```swift
class func javaScriptAction(withScript script: String, duration seconds: TimeInterval) -> SCNAction
```

## Parameters

- `script`: A string containing JavaScript source code.
- `seconds`: The duration of the action, in seconds.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

SceneKit exposes its classes, methods, and functions in the JavaScript context that runs the script—see the `SCNJavaScript.h` header file for details.

When the action executes, SceneKit runs the script repeatedly until the action’s duration expires. Each time SceneKit runs the script, it computes the elapsed time since the action began executing (as a fraction of the action’s duration between `0.0` and `1.0`) and makes it available to the script as a variable named `elapsedTime`. The script can also reference the [SCNNode](../scnnode.md) object running the action as a variable named `node`.

This action is not reversible; the reverse action executes the same script.

## See Also

### Creating Custom Actions

- [run(\_:)](run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customAction(duration:action:)](customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.

# javaScriptActionWithScript:duration: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that executes a JavaScript script periodically over a specified duration.

## Declaration

```objectivec
+ (SCNAction *) javaScriptActionWithScript:(NSString *) script duration:(NSTimeInterval) seconds;
```

## Parameters

- `script`: A string containing JavaScript source code.
- `seconds`: The duration of the action, in seconds.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

SceneKit exposes its classes, methods, and functions in the JavaScript context that runs the script—see the `SCNJavaScript.h` header file for details.

When the action executes, SceneKit runs the script repeatedly until the action’s duration expires. Each time SceneKit runs the script, it computes the elapsed time since the action began executing (as a fraction of the action’s duration between `0.0` and `1.0`) and makes it available to the script as a variable named `elapsedTime`. The script can also reference the [SCNNode](../scnnode.md) object running the action as a variable named `node`.

This action is not reversible; the reverse action executes the same script.

## See Also

### Creating Custom Actions

- [runBlock:](run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customActionWithDuration:actionBlock:](customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.
