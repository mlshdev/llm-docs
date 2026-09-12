> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/repeat(_:count:)](https://developer.apple.com/documentation/scenekit/scnaction/repeat(_:count:))

# repeat(\_:count:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that repeats another action a specified number of times.

## Declaration

```swift
class func `repeat`(_ action: SCNAction, count: Int) -> SCNAction
```

## Parameters

- `action`: The action to be executed.
- `count`: The number of times to execute the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats, until the count is reached.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it the same number of times.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# repeatAction:count: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that repeats another action a specified number of times.

## Declaration

```objectivec
+ (SCNAction *) repeatAction:(SCNAction *) action count:(NSUInteger) count;
```

## Parameters

- `action`: The action to be executed.
- `count`: The number of times to execute the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats, until the count is reached.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it the same number of times.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
