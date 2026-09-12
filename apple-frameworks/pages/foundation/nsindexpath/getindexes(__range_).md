> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexpath/getindexes(_:range:)](https://developer.apple.com/documentation/foundation/nsindexpath/getindexes(_:range:))

# getIndexes(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.

## Declaration

```swift
func getIndexes(_ indexes: UnsafeMutablePointer<Int>, range positionRange: NSRange)
```

## Parameters

- `indexes`: Pointer to a C array of at least as many [NSUInteger](../../objectivec/nsuinteger.md) objects as specified by the length of `positionRange`. On return, the array holds the index path’s indexes.
- `positionRange`: A range of valid positions within the index path. If the location plus the length of `positionRange` is greater than the length of the index path, this method raises an [rangeException](../nsexceptionname/rangeexception.md).

<a id="Discussion"></a>

## Discussion

You must allocate the memory for the C array.

## See Also

### Working with Indexes

- [index(atPosition:)](index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes(\_:)](getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.

# getIndexes:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the indexes stored in the index path from the positions specified by the position range into the specified indexes.

## Declaration

```objectivec
- (void) getIndexes:(NSUInteger *) indexes range:(NSRange) positionRange;
```

## Parameters

- `indexes`: Pointer to a C array of at least as many [NSUInteger](../../objectivec/nsuinteger.md) objects as specified by the length of `positionRange`. On return, the array holds the index path’s indexes.
- `positionRange`: A range of valid positions within the index path. If the location plus the length of `positionRange` is greater than the length of the index path, this method raises an [NSRangeException](../nsexceptionname/rangeexception.md).

<a id="Discussion"></a>

## Discussion

You must allocate the memory for the C array.

## See Also

### Working with Indexes

- [indexAtPosition:](index%28atposition_%29.md): Provides the value at a particular node in the index path.
- [getIndexes:](getindexes%28__%29.md): Deprecated. Copies the objects contained in the index path into indexes.
