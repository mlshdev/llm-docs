> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/intersects(_:)](https://developer.apple.com/documentation/foundation/nsset/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.

## Declaration

```swift
func intersects(_ otherSet: Set<AnyHashable>) -> Bool
```

## Parameters

- `otherSet`: The set with which to compare the receiving set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one object in the receiving set is also present in `otherSet`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Object equality is tested using isEqual:.

## See Also

### Comparing Sets

- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [isEqual(to:)](isequal%28to_%29.md): Compares the receiving set to another set.
- [value(forKey:)](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.

# intersectsSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.

## Declaration

```objectivec
- (BOOL) intersectsSet:(NSSet<id> *) otherSet;
```

## Parameters

- `otherSet`: The set with which to compare the receiving set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one object in the receiving set is also present in `otherSet`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Object equality is tested using isEqual:.

## See Also

### Comparing Sets

- [isSubsetOfSet:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [isEqualToSet:](isequal%28to_%29.md): Compares the receiving set to another set.
- [valueForKey:](value%28forkey_%29.md): Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.
