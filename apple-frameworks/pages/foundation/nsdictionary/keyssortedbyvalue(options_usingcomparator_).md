> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/keyssortedbyvalue(options:usingcomparator:)](https://developer.apple.com/documentation/foundation/nsdictionary/keyssortedbyvalue(options:usingcomparator:))

# keysSortedByValue(options:usingComparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

## Declaration

```swift
func keysSortedByValue(options opts: NSSortOptions = [], usingComparator cmptr: (Any, Any) -> ComparisonResult) -> [Any]
```

## Parameters

- `opts`: A bitmask of sort options.
- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using `cmptr` with the options given in `opts`.

## See Also

### Sorting Dictionaries

- [keysSortedByValue(using:)](keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValue(comparator:)](keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.

# keysSortedByValueWithOptions:usingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block and a specified set of options.

## Declaration

```objectivec
- (NSArray<id> *) keysSortedByValueWithOptions:(NSSortOptions) opts usingComparator:(NSComparator) cmptr;
```

## Parameters

- `opts`: A bitmask of sort options.
- `cmptr`: A comparator block.

<a id="return-value"></a>

## Return Value

An array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using `cmptr` with the options given in `opts`.

## See Also

### Sorting Dictionaries

- [keysSortedByValueUsingSelector:](keyssortedbyvalue%28using_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values.
- [keysSortedByValueUsingComparator:](keyssortedbyvalue%28comparator_%29.md): Returns an array of the dictionary’s keys, in the order they would be in if the dictionary were sorted by its values using a given comparator block.
