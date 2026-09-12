> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkbehavior/subscript(_:)-997a9](https://developer.apple.com/documentation/gameplaykit/gkbehavior/subscript(_:)-997a9)

# subscript(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the goal at the specified index in the behavior’s list of goals.

## Declaration

```swift
subscript(idx: Int) -> GKGoal { get }
```

## Parameters

- `idx`: An index in the behavior’s list of goals; must be less than the value of the [goalCount](goalcount.md) property.

<a id="return-value"></a>

## Return Value

The goal at the specified index.

<a id="Discussion"></a>

## Discussion

The order of goals in a behavior is undefined. However, you can use this method to enumerate all goals in a behavior.

## See Also

### Working with Goals Using Subscript Syntax

- [subscript(\_:)](subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the goal at the specified index in the behavior’s list of goals.

## Declaration

```objectivec
- (GKGoal *) objectAtIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `idx`: An index in the behavior’s list of goals; must be less than the value of the [goalCount](goalcount.md) property.

<a id="return-value"></a>

## Return Value

The goal at the specified index.

<a id="Discussion"></a>

## Discussion

The order of goals in a behavior is undefined. However, you can use this method to enumerate all goals in a behavior.

## See Also

### Working with Goals Using Subscript Syntax

- [objectForKeyedSubscript:](subscript%28__%29-2yvko.md): Returns the weight associated with the goal specified by subscript syntax.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the weight for the goal specified by subscript syntax.
