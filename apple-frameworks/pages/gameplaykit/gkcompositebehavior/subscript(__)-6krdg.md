> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcompositebehavior/subscript(_:)-6krdg](https://developer.apple.com/documentation/gameplaykit/gkcompositebehavior/subscript(_:)-6krdg)

# subscript(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.

## Declaration

```swift
subscript(idx: Int) -> GKBehavior { get }
```

## Parameters

- `idx`: An index in the composite behavior’s list of individual behaviors; it must be less than the value of the [behaviorCount](behaviorcount.md) property.

<a id="return-value"></a>

## Return Value

The behavior at the specified index.

<a id="Discussion"></a>

## Discussion

The order of individual behaviors in a composite behavior is undefined. However, you can use this method to enumerate all individual behaviors in a composite behavior.

## See Also

### Working with Behaviors Using Subscript Syntax

- [subscript(\_:)](subscript%28__%29-6jng9.md): Returns the weight associated with the behavior specified by subscript syntax.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the individual behavior at the specified index in the composite behavior’s list of behaviors.

## Declaration

```objectivec
- (GKBehavior *) objectAtIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `idx`: An index in the composite behavior’s list of individual behaviors; it must be less than the value of the [behaviorCount](behaviorcount.md) property.

<a id="return-value"></a>

## Return Value

The behavior at the specified index.

<a id="Discussion"></a>

## Discussion

The order of individual behaviors in a composite behavior is undefined. However, you can use this method to enumerate all individual behaviors in a composite behavior.

## See Also

### Working with Behaviors Using Subscript Syntax

- [objectForKeyedSubscript:](subscript%28__%29-6jng9.md): Returns the weight associated with the behavior specified by subscript syntax.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the weight for the behavior specified by subscript syntax.
