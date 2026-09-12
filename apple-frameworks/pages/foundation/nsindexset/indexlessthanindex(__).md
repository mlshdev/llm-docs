> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/indexlessthanindex(_:)](https://developer.apple.com/documentation/foundation/nsindexset/indexlessthanindex(_:))

# indexLessThanIndex(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns either the closest index in the index set that is less than a specific index or the not-found indicator.

## Declaration

```swift
func indexLessThanIndex(_ value: Int) -> Int
```

## Parameters

- `value`: Index being inquired about.

<a id="return-value"></a>

## Return Value

Closest index in the index set less than `index`; NSNotFound when the index set contains no qualifying index.

## See Also

### Getting Indexes

- [firstIndex](firstindex.md): The first index in the index set.
- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanOrEqual(to:)](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqual(to:)](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex(\_:)](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes(\_:maxCount:inIndexRange:)](getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

# indexLessThanIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns either the closest index in the index set that is less than a specific index or the not-found indicator.

## Declaration

```objectivec
- (NSUInteger) indexLessThanIndex:(NSUInteger) value;
```

## Parameters

- `value`: Index being inquired about.

<a id="return-value"></a>

## Return Value

Closest index in the index set less than `index`; NSNotFound when the index set contains no qualifying index.

## See Also

### Getting Indexes

- [firstIndex](firstindex.md): The first index in the index set.
- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanOrEqualToIndex:](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqualToIndex:](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex:](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes:maxCount:inIndexRange:](getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.
