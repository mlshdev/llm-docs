> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/sortedarray(comparator:)](https://developer.apple.com/documentation/foundation/nsorderedset/sortedarray(comparator:))

# sortedArray(comparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block

## Declaration

```swift
func sortedArray(comparator cmptr: (Any, Any) -> ComparisonResult) -> [Any]
```

## Parameters

- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified `cmptr`.

## See Also

### Creating a Sorted Array

- [sortedArray(using:)](sortedarray%28using_%29.md): Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.
- [sortedArray(options:usingComparator:)](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.

# sortedArrayUsingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block

## Declaration

```objectivec
- (NSArray<id> *) sortedArrayUsingComparator:(NSComparator) cmptr;
```

## Parameters

- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified `cmptr`.

## See Also

### Creating a Sorted Array

- [sortedArrayUsingDescriptors:](sortedarray%28using_%29.md): Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.
- [sortedArrayWithOptions:usingComparator:](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
