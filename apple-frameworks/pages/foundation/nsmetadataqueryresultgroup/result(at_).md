> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryresultgroup/result(at:)](https://developer.apple.com/documentation/foundation/nsmetadataqueryresultgroup/result(at:))

# result(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the query result at a specific index.

## Declaration

```swift
func result(at idx: Int) -> Any
```

## Parameters

- `idx`: The index of the desired result.

<a id="return-value"></a>

## Return Value

The query result at a specific index.

<a id="Discussion"></a>

## Discussion

For performance reasons, you should use this method when retrieving a specific result, rather than they array contained in [results](results.md).

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.

# resultAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the query result at a specific index.

## Declaration

```objectivec
- (id) resultAtIndex:(NSUInteger) idx;
```

## Parameters

- `idx`: The index of the desired result.

<a id="return-value"></a>

## Return Value

The query result at a specific index.

<a id="Discussion"></a>

## Discussion

For performance reasons, you should use this method when retrieving a specific result, rather than they array contained in [results](results.md).

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.
