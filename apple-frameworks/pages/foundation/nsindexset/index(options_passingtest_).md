> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/index(options:passingtest:)](https://developer.apple.com/documentation/foundation/nsindexset/index(options:passingtest:))

# index(options:passingTest:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index of the first object that passes the predicate Block test using the specified enumeration options.

## Declaration

```swift
func index(options opts: NSEnumerationOptions = [], passingTest predicate: (Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> Int
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order). See [NSEnumerationOptions](../nsenumerationoptions.md) for the supported values.
- `predicate`: The Block to apply to elements in the set.

  The Block takes two arguments:

  - **idx**: The index of the object.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to YES within the Block.

  The Block returns a Boolean value that indicates whether `obj` passed the test.

<a id="return-value"></a>

## Return Value

The index of the first object that passes the predicate test.

## See Also

### Querying Index Sets

- [contains(\_:)](contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [contains(\_:)](contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [contains(in:)](contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersects(in:)](intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](count.md): The number of indexes in the index set.
- [countOfIndexes(in:)](countofindexes%28in_%29.md): Returns the number of indexes in the index set that are members of a given range.
- [index(passingTest:)](index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexes(passingTest:)](indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [indexes(options:passingTest:)](indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [index(in:options:passingTest:)](index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexes(in:options:passingTest:)](indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.

# indexWithOptions:passingTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index of the first object that passes the predicate Block test using the specified enumeration options.

## Declaration

```objectivec
- (NSUInteger) indexWithOptions:(NSEnumerationOptions) opts passingTest:(BOOL (^)(NSUInteger idx, BOOL *stop)) predicate;
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order). See [NSEnumerationOptions](../nsenumerationoptions.md) for the supported values.
- `predicate`: The Block to apply to elements in the set.

  The Block takes two arguments:

  - **idx**: The index of the object.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to YES within the Block.

  The Block returns a Boolean value that indicates whether `obj` passed the test.

<a id="return-value"></a>

## Return Value

The index of the first object that passes the predicate test.

## See Also

### Querying Index Sets

- [containsIndex:](contains%28__%29-bb19.md): Indicates whether the index set contains a specific index.
- [containsIndexes:](contains%28__%29-5j2kh.md): Indicates whether the receiving index set contains a superset of the indexes in another index set.
- [containsIndexesInRange:](contains%28in_%29.md): Indicates whether the index set contains the indexes represented by an index range.
- [intersectsIndexesInRange:](intersects%28in_%29.md): Indicates whether the index set contains any of the indexes in a range.
- [count](count.md): The number of indexes in the index set.
- [countOfIndexesInRange:](countofindexes%28in_%29.md): Returns the number of indexes in the index set that are members of a given range.
- [indexPassingTest:](index%28passingtest_%29.md): Returns the index of the first object that passes the predicate Block test.
- [indexesPassingTest:](indexes%28passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test.
- [indexesWithOptions:passingTest:](indexes%28options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects that pass the Block test using the specified enumeration options.
- [indexInRange:options:passingTest:](index%28in_options_passingtest_%29.md): Returns the index of the first object in the specified range that passes the predicate Block test.
- [indexesInRange:options:passingTest:](indexes%28in_options_passingtest_%29.md): Returns an `NSIndexSet` containing the receiving index set’s objects in the specified range that pass the Block test.
