> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/add(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/add(_:))

# add(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given object to the set, if it is not already a member.

## Declaration

```swift
func add(_ object: Any)
```

## Parameters

- `object`: The object to add to the set.

## See Also

### Related Documentation

- [union(\_:)](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.

### Adding and removing entries

- [filter(using:)](filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [remove(\_:)](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjects(from:)](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

# addObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given object to the set, if it is not already a member.

## Declaration

```objectivec
- (void) addObject:(ObjectType) object;
```

## Parameters

- `object`: The object to add to the set.

## See Also

### Related Documentation

- [unionSet:](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.

### Adding and removing entries

- [filterUsingPredicate:](filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [removeObject:](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects](removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjectsFromArray:](addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.
