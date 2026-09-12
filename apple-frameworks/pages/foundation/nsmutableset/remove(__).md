> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/remove(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/remove(_:))

# remove(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given object from the set.

## Declaration

```swift
func remove(_ object: Any)
```

## Parameters

- `object`: The object to remove from the set.

## See Also

### Related Documentation

- [minus(\_:)](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.

### Adding and removing entries

- [add(\_:)](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [filter(using:)](filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjects(from:)](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

# removeObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a given object from the set.

## Declaration

```objectivec
- (void) removeObject:(ObjectType) object;
```

## Parameters

- `object`: The object to remove from the set.

## See Also

### Related Documentation

- [minusSet:](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersectSet:](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.

### Adding and removing entries

- [addObject:](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [filterUsingPredicate:](filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [removeAllObjects](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjectsFromArray:](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.
