> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/sort(comparator:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/sort(comparator:))

# sort(comparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the mutable ordered set using the comparison method specified by the comparator block.

## Declaration

```swift
func sort(comparator cmptr: (Any, Any) -> ComparisonResult)
```

## Parameters

- `cmptr`: A comparator block.

## See Also

### Sorting Entries

- [sort(using:)](sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange(\_:options:usingComparator:)](sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

# sortUsingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the mutable ordered set using the comparison method specified by the comparator block.

## Declaration

```objectivec
- (void) sortUsingComparator:(NSComparator) cmptr;
```

## Parameters

- `cmptr`: A comparator block.

## See Also

### Sorting Entries

- [sortUsingDescriptors:](sort%28using_%29.md): Sorts the receiving ordered set using a given array of sort descriptors.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange:options:usingComparator:](sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
