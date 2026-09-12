> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/keyssortedbyvalue(using:)](https://developer.apple.com/documentation/foundation/nsdictionary/keyssortedbyvalue(using:))

# keysSortedByValue(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.

## Declaration

```swift
func keysSortedByValue(using comparator: Selector) -> [Any]
```

## Parameters

- `comparator`: A selector that specifies the method to use to compare the values in the dictionary.

  The `comparator` method should return `NSOrderedAscending` if the dictionary value is smaller than the argument, `NSOrderedDescending` if the dictionary value is larger than the argument, and `NSOrderedSame` if they are equal.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.

<a id="Discussion"></a>

## Discussion

Pairs of dictionary values are compared using the comparison method specified by `comparator`; the `comparator` message is sent to one of the values and has as its single argument the other value from the dictionary.

## See Also

### Related Documentation

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [sortedArray(using:)](../nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

### Sorting Dictionaries

- [keysSortedByValue(comparator:)](keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.
- [keysSortedByValue(options:usingComparator:)](keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

# keysSortedByValueUsingSelector: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.

## Declaration

```objectivec
- (NSArray<id> *) keysSortedByValueUsingSelector:(SEL) comparator;
```

## Parameters

- `comparator`: A selector that specifies the method to use to compare the values in the dictionary.

  The `comparator` method should return `NSOrderedAscending` if the dictionary value is smaller than the argument, `NSOrderedDescending` if the dictionary value is larger than the argument, and `NSOrderedSame` if they are equal.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.

<a id="Discussion"></a>

## Discussion

Pairs of dictionary values are compared using the comparison method specified by `comparator`; the `comparator` message is sent to one of the values and has as its single argument the other value from the dictionary.

## See Also

### Related Documentation

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [sortedArrayUsingSelector:](../nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

### Sorting Dictionaries

- [keysSortedByValueUsingComparator:](keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.
- [keysSortedByValueWithOptions:usingComparator:](keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.
