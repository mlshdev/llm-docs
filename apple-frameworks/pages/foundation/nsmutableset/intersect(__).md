> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/intersect(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/intersect(_:))

# intersect(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving set each object that isn’t a member of another given set.

## Declaration

```swift
func intersect(_ otherSet: Set<AnyHashable>)
```

## Parameters

- `otherSet`: The set with which to perform the intersection.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the set of all of its members.

### Combining and recombining sets

- [union(\_:)](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minus(\_:)](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [setSet(\_:)](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.

# intersectSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving set each object that isn’t a member of another given set.

## Declaration

```objectivec
- (void) intersectSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set with which to perform the intersection.

## See Also

### Related Documentation

- [removeObject:](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects](removeallobjects%28%29.md): Empties the set of all of its members.

### Combining and recombining sets

- [unionSet:](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minusSet:](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [setSet:](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.
