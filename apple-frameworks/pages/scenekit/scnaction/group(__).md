> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/group(_:)](https://developer.apple.com/documentation/scenekit/scnaction/group(_:))

# group(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that runs a collection of actions in parallel.

## Declaration

```swift
class func group(_ actions: [SCNAction]) -> SCNAction
```

## Parameters

- `actions`: An array of [SCNAction](../scnaction.md) objects.

<a id="return-value"></a>

## Return Value

A new group action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the actions that make up the group all start immediately and run in parallel. The duration of the group action is the longest duration among the collection of actions. If an action in the group has a duration less than the group’s duration, the action completes and then idles until the group completes the remaining actions. This matters most when creating a repeating action that repeats a group.

This action is reversible; it creates a new group action that contains the reverse of each action specified in the group.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [sequence(\_:)](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# group: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions in parallel.

## Declaration

```objectivec
+ (SCNAction *) group:(NSArray<SCNAction *> *) actions;
```

## Parameters

- `actions`: An array of [SCNAction](../scnaction.md) objects.

<a id="return-value"></a>

## Return Value

A new group action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the actions that make up the group all start immediately and run in parallel. The duration of the group action is the longest duration among the collection of actions. If an action in the group has a duration less than the group’s duration, the action completes and then idles until the group completes the remaining actions. This matters most when creating a repeating action that repeats a group.

This action is reversible; it creates a new group action that contains the reverse of each action specified in the group.

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [sequence:](sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
