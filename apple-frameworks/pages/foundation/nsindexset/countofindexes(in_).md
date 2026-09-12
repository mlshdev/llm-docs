> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/countofindexes(in:)](https://developer.apple.com/documentation/foundation/nsindexset/countofindexes(in:))

# countOfIndexes(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of indexes in the index set that are members of a given range.

## Declaration

```swift
func countOfIndexes(in range: NSRange) -> Int
```

## Parameters

- `range`: Index range being inquired about.

<a id="return-value"></a>

## Return Value

Number of indexes in the index set that are members of `indexRange`.

## See Also

### Querying Index Sets

- [contains(\_:)](contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [contains(\_:)](contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [contains(in:)](contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersects(in:)](intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](count.md): The number of indexes in the index set.
- [index(passingTest:)](index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexes(passingTest:)](indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [index(options:passingTest:)](index%28options_passingtest_%29.md): Returns the index of the first object that passes the predicate Block test using the specified enumeration options.
- [indexes(options:passingTest:)](indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [index(in:options:passingTest:)](index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexes(in:options:passingTest:)](indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.

# countOfIndexesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of indexes in the index set that are members of a given range.

## Declaration

```objectivec
- (NSUInteger) countOfIndexesInRange:(NSRange) range;
```

## Parameters

- `range`: Index range being inquired about.

<a id="return-value"></a>

## Return Value

Number of indexes in the index set that are members of `indexRange`.

## See Also

### Querying Index Sets

- [containsIndex:](contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [containsIndexes:](contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [containsIndexesInRange:](contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersectsIndexesInRange:](intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](count.md): The number of indexes in the index set.
- [indexPassingTest:](index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexesPassingTest:](indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [indexWithOptions:passingTest:](index%28options_passingtest_%29.md): Returns the index of the first object that passes the predicate Block test using the specified enumeration options.
- [indexesWithOptions:passingTest:](indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [indexInRange:options:passingTest:](index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexesInRange:options:passingTest:](indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.
