> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/repeatforever(_:)](https://developer.apple.com/documentation/scenekit/scnaction/repeatforever(_:))

# repeatForever(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that repeats another action forever.

## Declaration

```swift
class func repeatForever(_ action: SCNAction) -> SCNAction
```

## Parameters

- `action`: The action to execute.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it forever.

> **Note**

>  The action to be repeated must have a non-instantaneous duration.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.

# repeatActionForever: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that repeats another action forever.

## Declaration

```objectivec
+ (SCNAction *) repeatActionForever:(SCNAction *) action;
```

## Parameters

- `action`: The action to execute.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the associated action runs to completion and then repeats.

This action is reversible; it creates a new action that is the reverse of the specified action and then repeats it forever.

> **Note**

>  The action to be repeated must have a non-instantaneous duration.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
