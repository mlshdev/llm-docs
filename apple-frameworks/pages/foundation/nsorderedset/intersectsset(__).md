> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/intersectsset(_:)](https://developer.apple.com/documentation/foundation/nsorderedset/intersectsset(_:))

# intersectsSet(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.

## Declaration

```swift
func intersectsSet(_ set: Set<AnyHashable>) -> Bool
```

## Parameters

- `set`: The set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one object in the receiving ordered set is also present in `other`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Sets

- [isEqual(to:)](isequal%28to_%29.md): Compares the receiving ordered set to another ordered set.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [isSubset(of:)](issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubset(of:)](issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.

# intersectsSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given set.

## Declaration

```objectivec
- (BOOL) intersectsSet:(NSSet<id> *) set;
```

## Parameters

- `set`: The set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one object in the receiving ordered set is also present in `other`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Sets

- [isEqualToOrderedSet:](isequal%28to_%29.md): Compares the receiving ordered set to another ordered set.
- [intersectsOrderedSet:](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving ordered set is also present in another given ordered set.
- [isSubsetOfOrderedSet:](issubset%28of_%29-7brc.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given ordered set.
- [isSubsetOfSet:](issubset%28of_%29-8zx9x.md): Returns a Boolean value that indicates whether every object in the receiving ordered set is also present in another given set.
