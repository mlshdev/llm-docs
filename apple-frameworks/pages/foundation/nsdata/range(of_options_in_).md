> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/range(of:options:in:)](https://developer.apple.com/documentation/foundation/nsdata/range(of:options:in:))

# range(of:options:in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.

## Declaration

```swift
func range(of dataToFind: Data, options mask: NSData.SearchOptions = [], in searchRange: NSRange) -> NSRange
```

## Parameters

- `dataToFind`: The data for which to search.
- `mask`: A mask specifying search options. The [NSData.SearchOptions](searchoptions.md) options may be specified singly or by combining them with the C bitwise `OR` operator.
- `searchRange`: The range within the receiver in which to search for `dataToFind`. If this range is not within the data object’s range of bytes, [rangeException](../nsexceptionname/rangeexception.md) is raised.

<a id="return-value"></a>

## Return Value

An [NSRange](../nsrange-c.struct.md) structure giving the location and length of `dataToFind` within `searchRange`, modulo the options in `mask`. The range returned is relative to the start of the searched data, not the passed-in search range. Returns ```{``NSNotFound``, 0}``` if `dataToFind` is not found or is empty.

## See Also

### Finding Data

- [subdata(with:)](subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [NSData.SearchOptions](searchoptions.md): Options for method used to search data objects.

# rangeOfData:options:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.

## Declaration

```objectivec
- (NSRange) rangeOfData:(NSData *) dataToFind options:(NSDataSearchOptions) mask range:(NSRange) searchRange;
```

## Parameters

- `dataToFind`: The data for which to search.
- `mask`: A mask specifying search options. The [NSDataSearchOptions](searchoptions.md) options may be specified singly or by combining them with the C bitwise `OR` operator.
- `searchRange`: The range within the receiver in which to search for `dataToFind`. If this range is not within the data object’s range of bytes, [NSRangeException](../nsexceptionname/rangeexception.md) is raised.

<a id="return-value"></a>

## Return Value

An [NSRange](../nsrange-c.struct.md) structure giving the location and length of `dataToFind` within `searchRange`, modulo the options in `mask`. The range returned is relative to the start of the searched data, not the passed-in search range. Returns ```{``NSNotFound``, 0}``` if `dataToFind` is not found or is empty.

## See Also

### Finding Data

- [subdataWithRange:](subdata%28with_%29.md): Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.
- [NSDataSearchOptions](searchoptions.md): Options for method used to search data objects.
