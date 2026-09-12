> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/isequal(to:)](https://developer.apple.com/documentation/foundation/nsset/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving set to another set.

## Declaration

```swift
func isEqual(to otherSet: Set<AnyHashable>) -> Bool
```

## Parameters

- `otherSet`: The set with which to compare the receiving set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherSet` are equal to the contents of the receiving set, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two sets have equal contents if they each have the same number of members and if each member of one set is present in the other. Object equality is tested using isEqual:.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Sets

- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [value(forKey:)](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.

# isEqualToSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving set to another set.

## Declaration

```objectivec
- (BOOL) isEqualToSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set with which to compare the receiving set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherSet` are equal to the contents of the receiving set, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two sets have equal contents if they each have the same number of members and if each member of one set is present in the other. Object equality is tested using isEqual:.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Sets

- [isSubsetOfSet:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersectsSet:](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [valueForKey:](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.
