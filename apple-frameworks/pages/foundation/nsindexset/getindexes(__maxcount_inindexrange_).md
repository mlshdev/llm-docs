> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/getindexes(_:maxcount:inindexrange:)](https://developer.apple.com/documentation/foundation/nsindexset/getindexes(_:maxcount:inindexrange:))

# getIndexes(\_:maxCount:inIndexRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

## Declaration

```swift
func getIndexes(_ indexBuffer: UnsafeMutablePointer<Int>, maxCount bufferSize: Int, inIndexRange range: NSRangePointer?) -> Int
```

## Parameters

- `indexBuffer`: Index buffer to fill.
- `bufferSize`: Maximum size of `indexBuffer`.
- `range`: Index range to compare with indexes in the index set; `nil` represents all the indexes in the index set. Indexes in the index range and in the index set are copied to `indexBuffer`. On output, the range of indexes not copied to `indexBuffer`.

<a id="return-value"></a>

## Return Value

Number of indexes placed in `indexBuffer`.

<a id="Discussion"></a>

## Discussion

You are responsible for allocating the memory required for `indexBuffer` and for releasing it later.

Suppose you have an index set with contiguous indexes from 1 to 100. If you use this method to request a range of `(1, 100)`—which represents the set of indexes 1 through 100—and specify a buffer size of `20`, this method returns 20 indexes—1 through 20—in `indexBuffer` and sets `indexRange` to `(21, 80)`—which represents the indexes 21 through 100.

Use this method to retrieve entries quickly and efficiently from an index set. You can call this method repeatedly to retrieve blocks of index values and then process them. When doing so, use the return value and `indexRange` to determine when you have finished processing the desired indexes. When the return value is less than `bufferSize`, you have reached the end of the range.

## See Also

### Getting Indexes

- [firstIndex](firstindex.md): The first index in the index set.
- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanIndex(\_:)](indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqual(to:)](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqual(to:)](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex(\_:)](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.

# getIndexes:maxCount:inIndexRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

## Declaration

```objectivec
- (NSUInteger) getIndexes:(NSUInteger *) indexBuffer maxCount:(NSUInteger) bufferSize inIndexRange:(NSRangePointer) range;
```

## Parameters

- `indexBuffer`: Index buffer to fill.
- `bufferSize`: Maximum size of `indexBuffer`.
- `range`: Index range to compare with indexes in the index set; `nil` represents all the indexes in the index set. Indexes in the index range and in the index set are copied to `indexBuffer`. On output, the range of indexes not copied to `indexBuffer`.

<a id="return-value"></a>

## Return Value

Number of indexes placed in `indexBuffer`.

<a id="Discussion"></a>

## Discussion

You are responsible for allocating the memory required for `indexBuffer` and for releasing it later.

Suppose you have an index set with contiguous indexes from 1 to 100. If you use this method to request a range of `(1, 100)`—which represents the set of indexes 1 through 100—and specify a buffer size of `20`, this method returns 20 indexes—1 through 20—in `indexBuffer` and sets `indexRange` to `(21, 80)`—which represents the indexes 21 through 100.

Use this method to retrieve entries quickly and efficiently from an index set. You can call this method repeatedly to retrieve blocks of index values and then process them. When doing so, use the return value and `indexRange` to determine when you have finished processing the desired indexes. When the return value is less than `bufferSize`, you have reached the end of the range.

## See Also

### Getting Indexes

- [firstIndex](firstindex.md): The first index in the index set.
- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanIndex:](indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqualToIndex:](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqualToIndex:](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex:](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
