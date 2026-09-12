> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset/setset(_:)](https://developer.apple.com/documentation/foundation/nsmutableset/setset(_:))

# setSet(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties the receiving set, then adds each object contained in another given set.

## Declaration

```swift
func setSet(_ otherSet: Set<AnyHashable>)
```

## Parameters

- `otherSet`: The set whose members replace the receiving set’s content.

## See Also

### Combining and recombining sets

- [union(\_:)](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minus(\_:)](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.

# setSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Empties the receiving set, then adds each object contained in another given set.

## Declaration

```objectivec
- (void) setSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set whose members replace the receiving set’s content.

## See Also

### Combining and recombining sets

- [unionSet:](union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minusSet:](minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersectSet:](intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
