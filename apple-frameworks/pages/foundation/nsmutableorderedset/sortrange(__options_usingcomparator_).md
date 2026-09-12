> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/sortrange(_:options:usingcomparator:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/sortrange(_:options:usingcomparator:))

# sortRange(\_:options:usingComparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

## Declaration

```swift
func sortRange(_ range: NSRange, options opts: NSSortOptions = [], usingComparator cmptr: (Any, Any) -> ComparisonResult)
```

## Parameters

- `range`: The range to sort.
- `opts`: A bitmask that specifies the options for the sort (whether it should be performed concurrently and whether it should be performed stably).
- `cmptr`: A comparator block.

## See Also

### Sorting Entries

- [sort(using:)](sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sort(comparator:)](sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

# sortRange:options:usingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

## Declaration

```objectivec
- (void) sortRange:(NSRange) range options:(NSSortOptions) opts usingComparator:(NSComparator) cmptr;
```

## Parameters

- `range`: The range to sort.
- `opts`: A bitmask that specifies the options for the sort (whether it should be performed concurrently and whether it should be performed stably).
- `cmptr`: A comparator block.

## See Also

### Sorting Entries

- [sortUsingDescriptors:](sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
