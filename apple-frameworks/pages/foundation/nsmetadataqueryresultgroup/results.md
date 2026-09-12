> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryresultgroup/results](https://developer.apple.com/documentation/foundation/nsmetadataqueryresultgroup/results)

# results (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the result group’s result objects.

## Declaration

```swift
var results: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

The results array is a proxy object that is primarily intended for use with Cocoa bindings. While it is possible to copy the proxy array to get a “snapshot” of the complete current query results, it is generally not recommended due to performance and memory issues. To access individual result array elements you should instead use the [resultCount](resultcount.md) property and the [result(at:)](result%28at_%29.md) method.

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [result(at:)](result%28at_%29.md): Returns the query result at a specific index.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.

# results (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the result group’s result objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray * results;
```

<a id="Discussion"></a>

## Discussion

The results array is a proxy object that is primarily intended for use with Cocoa bindings. While it is possible to copy the proxy array to get a “snapshot” of the complete current query results, it is generally not recommended due to performance and memory issues. To access individual result array elements you should instead use the [resultCount](resultcount.md) property and the [resultAtIndex:](result%28at_%29.md) method.

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [resultAtIndex:](result%28at_%29.md): Returns the query result at a specific index.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.
