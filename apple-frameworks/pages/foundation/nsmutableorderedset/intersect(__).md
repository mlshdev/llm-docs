> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/intersect(_:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/intersect(_:))

# intersect(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving ordered set each object that isn’t a member of another ordered set.

## Declaration

```swift
func intersect(_ other: NSOrderedSet)
```

## Parameters

- `other`: The ordered set with which to perform the intersection.

## See Also

### Combining and Recombining Entries

- [intersectSet(\_:)](intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minus(\_:)](minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [minusSet(\_:)](minusset%28__%29.md): Removes each object in another given set from the receiving mutable ordered set, if present.
- [union(\_:)](union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet(\_:)](unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.

# intersectOrderedSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving ordered set each object that isn’t a member of another ordered set.

## Declaration

```objectivec
- (void) intersectOrderedSet:(NSOrderedSet<id> *) other;
```

## Parameters

- `other`: The ordered set with which to perform the intersection.

## See Also

### Combining and Recombining Entries

- [intersectSet:](intersectset%28__%29.md): Removes from the receiving ordered set each object that isn’t a member of another set.
- [minusOrderedSet:](minus%28__%29.md): Removes each object in another given ordered set from the receiving mutable ordered set, if present.
- [minusSet:](minusset%28__%29.md): Removes each object in another given set from the receiving mutable ordered set, if present.
- [unionOrderedSet:](union%28__%29.md): Adds each object in another given ordered set to the receiving mutable ordered set, if not present.
- [unionSet:](unionset%28__%29.md): Adds each object in another given set to the receiving mutable ordered set, if not present.
