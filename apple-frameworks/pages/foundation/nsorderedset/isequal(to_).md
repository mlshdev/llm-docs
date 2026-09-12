> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/isequal(to:)](https://developer.apple.com/documentation/foundation/nsorderedset/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving ordered set to another ordered set.

## Declaration

```swift
func isEqual(to other: NSOrderedSet) -> Bool
```

## Parameters

- `other`: The ordered set with which to compare the receiving ordered set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `other` are equal to the contents of the receiving ordered set, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two ordered sets have equal contents if they each have the same number of members, if each member of one ordered set is present in the other, and the members are in the same order.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Sets

- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [intersectsSet(\_:)](intersectsset%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.
- [isSubset(of:)](issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubset(of:)](issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.

# isEqualToOrderedSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving ordered set to another ordered set.

## Declaration

```objectivec
- (BOOL) isEqualToOrderedSet:(NSOrderedSet<id> *) other;
```

## Parameters

- `other`: The ordered set with which to compare the receiving ordered set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `other` are equal to the contents of the receiving ordered set, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two ordered sets have equal contents if they each have the same number of members, if each member of one ordered set is present in the other, and the members are in the same order.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

### Comparing Sets

- [intersectsOrderedSet:](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [intersectsSet:](intersectsset%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.
- [isSubsetOfOrderedSet:](issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubsetOfSet:](issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.
