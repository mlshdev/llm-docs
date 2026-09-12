> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/sort(using:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/sort(using:))

# sort(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiving ordered set using a given array of sort descriptors.

## Declaration

```swift
func sort(using sortDescriptors: [NSSortDescriptor])
```

## Parameters

- `sortDescriptors`: An array containing the `NSSortDescriptor` objects to use to sort the receiving ordered set’s contents.

<a id="Discussion"></a>

## Discussion

See [NSSortDescriptor](../nssortdescriptor.md) for additional information.

## See Also

### Sorting Entries

- [sort(comparator:)](sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange(\_:options:usingComparator:)](sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.

# sortUsingDescriptors: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiving ordered set using a given array of sort descriptors.

## Declaration

```objectivec
- (void) sortUsingDescriptors:(NSArray<NSSortDescriptor *> *) sortDescriptors;
```

## Parameters

- `sortDescriptors`: An array containing the `NSSortDescriptor` objects to use to sort the receiving ordered set’s contents.

<a id="Discussion"></a>

## Discussion

See [NSSortDescriptor](../nssortdescriptor.md) for additional information.

## See Also

### Sorting Entries

- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the mutable ordered set using the comparison method specified by the comparator block.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
- [sortRange:options:usingComparator:](sortrange%28__options_usingcomparator_%29.md): Sorts the specified range of the mutable ordered set using the specified options and the comparison method specified by a given comparator block.
