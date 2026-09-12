> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/sequence(_:)](https://developer.apple.com/documentation/scenekit/scnaction/sequence(_:))

# sequence(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that runs a collection of actions sequentially.

## Declaration

```swift
class func sequence(_ actions: [SCNAction]) -> SCNAction
```

## Parameters

- `actions`: An array of [SCNAction](../scnaction.md) objects.

<a id="return-value"></a>

## Return Value

A new sequence action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the first action in the sequence starts and runs to completion. Subsequent actions in the sequence run in a similar fashion until all of the actions in the sequence have executed. The duration of the sequence action is the sum of the durations of the actions in the sequence.

This action is reversible; it creates a new sequence action that reverses the order of the actions. Each action in the reversed sequence is itself reversed. For example, the actions `reverseSequence` and `sequenceReverse` in the code example below are equivalent:

```objc
SCNAction *sequence = [SCNAction sequence:@[ actionA, actionB, actionC ]];
SCNAction *reverseSequence = [SCNAction sequence:@[ [actionC reversedAction],
                                                    [actionB reversedAction],
                                                    [actionA reversedAction] ]];
SCNAction *sequenceReverse = [sequence reversedAction];
```

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group(\_:)](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [repeat(\_:count:)](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](repeatforever%28__%29.md): Creates an action that repeats another action forever.

# sequence: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that runs a collection of actions sequentially.

## Declaration

```objectivec
+ (SCNAction *) sequence:(NSArray<SCNAction *> *) actions;
```

## Parameters

- `actions`: An array of [SCNAction](../scnaction.md) objects.

<a id="return-value"></a>

## Return Value

A new sequence action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the first action in the sequence starts and runs to completion. Subsequent actions in the sequence run in a similar fashion until all of the actions in the sequence have executed. The duration of the sequence action is the sum of the durations of the actions in the sequence.

This action is reversible; it creates a new sequence action that reverses the order of the actions. Each action in the reversed sequence is itself reversed. For example, the actions `reverseSequence` and `sequenceReverse` in the code example below are equivalent:

```objc
SCNAction *sequence = [SCNAction sequence:@[ actionA, actionB, actionC ]];
SCNAction *reverseSequence = [SCNAction sequence:@[ [actionC reversedAction],
                                                    [actionB reversedAction],
                                                    [actionA reversedAction] ]];
SCNAction *sequenceReverse = [sequence reversedAction];
```

## See Also

### Creating Actions That Combine or Repeat Other Actions

- [group:](group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [repeatAction:count:](repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](repeatforever%28__%29.md): Creates an action that repeats another action forever.
