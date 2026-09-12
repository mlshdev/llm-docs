> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/sortedarray(using:)](https://developer.apple.com/documentation/foundation/nsorderedset/sortedarray(using:))

# sortedArray(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.

## Declaration

```swift
func sortedArray(using sortDescriptors: [NSSortDescriptor]) -> [Any]
```

## Parameters

- `sortDescriptors`: An array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

An `NSArray` containing the ordered set’s elements sorted as specified by `sortDescriptors`.

<a id="Discussion"></a>

## Discussion

The first descriptor specifies the primary key path to be used in sorting the ordered set’s elements. Any subsequent descriptors are used to further refine sorting of objects with duplicate values. See [NSSortDescriptor](../nssortdescriptor.md) for additional information.

## See Also

### Creating a Sorted Array

- [sortedArray(comparator:)](sortedarray%28comparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block
- [sortedArray(options:usingComparator:)](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.

# sortedArrayUsingDescriptors: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the ordered set’s elements sorted as specified by a given array of sort descriptors.

## Declaration

```objectivec
- (NSArray<id> *) sortedArrayUsingDescriptors:(NSArray<NSSortDescriptor *> *) sortDescriptors;
```

## Parameters

- `sortDescriptors`: An array of [NSSortDescriptor](../nssortdescriptor.md) objects.

<a id="return-value"></a>

## Return Value

An `NSArray` containing the ordered set’s elements sorted as specified by `sortDescriptors`.

<a id="Discussion"></a>

## Discussion

The first descriptor specifies the primary key path to be used in sorting the ordered set’s elements. Any subsequent descriptors are used to further refine sorting of objects with duplicate values. See [NSSortDescriptor](../nssortdescriptor.md) for additional information.

## See Also

### Creating a Sorted Array

- [sortedArrayUsingComparator:](sortedarray%28comparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block
- [sortedArrayWithOptions:usingComparator:](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving ordered set’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
