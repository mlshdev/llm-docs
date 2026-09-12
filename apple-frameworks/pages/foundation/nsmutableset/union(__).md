> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/union(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/union(_:))

# union(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds each object in another given set to the receiving set, if not present.

## Declaration

```swift
func union(_ otherSet: Set<AnyHashable>)
```

## Parameters

- `otherSet`: The set of objects to add to the receiving set.

## See Also

### Related Documentation

- [add(\_:)](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [addObjects(from:)](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

### Combining and recombining sets

- [minus(\_:)](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet(\_:)](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.

# unionSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds each object in another given set to the receiving set, if not present.

## Declaration

```objectivec
- (void) unionSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set of objects to add to the receiving set.

## See Also

### Related Documentation

- [addObject:](add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [addObjectsFromArray:](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

### Combining and recombining sets

- [minusSet:](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersectSet:](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet:](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.
