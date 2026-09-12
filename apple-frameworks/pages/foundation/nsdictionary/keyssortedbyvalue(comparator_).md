> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/keyssortedbyvalue(comparator:)](https://developer.apple.com/documentation/foundation/nsdictionary/keyssortedbyvalue(comparator:))

# keysSortedByValue(comparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.

## Declaration

```swift
func keysSortedByValue(comparator cmptr: (Any, Any) -> ComparisonResult) -> [Any]
```

## Parameters

- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using `cmptr`.

## See Also

### Sorting Dictionaries

- [keysSortedByValue(using:)](keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValue(options:usingComparator:)](keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

# keysSortedByValueUsingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.

## Declaration

```objectivec
- (NSArray<id> *) keysSortedByValueUsingComparator:(NSComparator) cmptr;
```

## Parameters

- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using `cmptr`.

## See Also

### Sorting Dictionaries

- [keysSortedByValueUsingSelector:](keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValueWithOptions:usingComparator:](keyssortedbyvalue%28options_usingcomparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.
