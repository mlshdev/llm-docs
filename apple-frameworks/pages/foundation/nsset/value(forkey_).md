> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsset/value(forkey:)](https://developer.apple.com/documentation/foundation/nsset/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.

## Declaration

```swift
func value(forKey key: String) -> Any
```

## Parameters

- `key`: The name of one of the properties of the receiving set’s members.

<a id="return-value"></a>

## Return Value

A set containing the results of invoking `valueForKey:` (with the argument `key`) on each of the receiving set’s members.

<a id="Discussion"></a>

## Discussion

The returned set might not have the same number of members as the receiving set. The returned set will not contain any elements corresponding to instances of `valueForKey:` returning `nil` (note that this is in contrast with `NSArray`’s implementation, which may put `NSNull` values in the arrays it returns).

## See Also

### Comparing Sets

- [isSubset(of:)](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqual(to:)](isequal%28to_%29.md): Compares the receiving set to another set.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.

# valueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Return a set containing the results of invoking `valueForKey:` on each of the receiving set’s members.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the properties of the receiving set’s members.

<a id="return-value"></a>

## Return Value

A set containing the results of invoking `valueForKey:` (with the argument `key`) on each of the receiving set’s members.

<a id="Discussion"></a>

## Discussion

The returned set might not have the same number of members as the receiving set. The returned set will not contain any elements corresponding to instances of `valueForKey:` returning `nil` (note that this is in contrast with `NSArray`’s implementation, which may put `NSNull` values in the arrays it returns).

## See Also

### Comparing Sets

- [isSubsetOfSet:](issubset%28of_%29.md): Returns a Boolean value that indicates whether every object in the receiving set is also present in another given set.
- [intersectsSet:](intersects%28__%29.md): Returns a Boolean value that indicates whether at least one object in the receiving set is also present in another given set.
- [isEqualToSet:](isequal%28to_%29.md): Compares the receiving set to another set.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Invokes `setValue:forKey:` on each of the set’s members.
