> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/minusset(_:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/minusset(_:))

# minusSet(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each object in another given set from the receiving mutable ordered set, if present.

## Declaration

```swift
func minusSet(_ other: Set<AnyHashable>)
```

## Parameters

- `other`: The set of objects to remove from the receiving set.

## See Also

### Combining and Recombining Entries

- [intersect(\_:)](intersect%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another ordered set.
- [intersectSet(\_:)](intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minus(\_:)](minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [union(\_:)](union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet(\_:)](unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.

# minusSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes each object in another given set from the receiving mutable ordered set, if present.

## Declaration

```objectivec
- (void) minusSet:(NSSet<id> *) other;
```

## Parameters

- `other`: The set of objects to remove from the receiving set.

## See Also

### Combining and Recombining Entries

- [intersectOrderedSet:](intersect%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another ordered set.
- [intersectSet:](intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minusOrderedSet:](minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [unionOrderedSet:](union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet:](unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.
