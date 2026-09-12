> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/minus(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/minus(_:))

# minus(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each object in another given set from the receiving set, if present.

## Declaration

```swift
func minus(_ otherSet: Set<AnyHashable>)
```

## Parameters

- `otherSet`: The set of objects to remove from the receiving set.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the set of all of its members.

### Combining and recombining sets

- [union(\_:)](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet(\_:)](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.

# minusSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each object in another given set from the receiving set, if present.

## Declaration

```objectivec
- (void) minusSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set of objects to remove from the receiving set.

## See Also

### Related Documentation

- [removeObject:](remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects](removeallobjects%28%29.md): Empties the set of all of its members.

### Combining and recombining sets

- [unionSet:](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [intersectSet:](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet:](setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.
