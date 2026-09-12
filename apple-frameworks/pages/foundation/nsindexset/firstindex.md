> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/firstindex](https://developer.apple.com/documentation/foundation/nsindexset/firstindex)

# firstIndex (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The first index in the index set.

## Declaration

```swift
var firstIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

First index in the index set or NSNotFound when the index set is empty.

## See Also

### Getting Indexes

- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanIndex(\_:)](indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqual(to:)](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqual(to:)](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex(\_:)](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes(\_:maxCount:inIndexRange:)](getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.

# firstIndex (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The first index in the index set.

## Declaration

```objectivec
@property (readonly) NSUInteger firstIndex;
```

<a id="Discussion"></a>

## Discussion

First index in the index set or NSNotFound when the index set is empty.

## See Also

### Getting Indexes

- [lastIndex](lastindex.md): The last index in the index set.
- [indexLessThanIndex:](indexlessthanindex%28__%29.md): Returns either the closest index in the index set that is less than a specific index or the not-found indicator.
- [indexLessThanOrEqualToIndex:](indexlessthanorequal%28to_%29.md): Returns either the closest index in the index set that is less than or equal to a specific index or the not-found indicator.
- [indexGreaterThanOrEqualToIndex:](indexgreaterthanorequal%28to_%29.md): Returns either the closest index in the index set that is greater than or equal to a specific index or the not-found indicator.
- [indexGreaterThanIndex:](indexgreaterthanindex%28__%29.md): Returns either the closest index in the index set that is greater than a specific index or the not-found indicator.
- [getIndexes:maxCount:inIndexRange:](getindexes%28__maxcount_inindexrange_%29.md): The index set fills an index buffer with the indexes contained both in the index set and in an index range, returning the number of indexes copied.
