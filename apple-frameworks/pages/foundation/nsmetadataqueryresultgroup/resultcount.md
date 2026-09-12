> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryresultgroup/resultcount](https://developer.apple.com/documentation/foundation/nsmetadataqueryresultgroup/resultcount)

# resultCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of results returned by the result group.

## Declaration

```swift
var resultCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

For performance reasons, you should use this property rather than checking the `count` property on [results](results.md).

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [result(at:)](result%28at_%29.md): Returns the query result at a specific index.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.

# resultCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of results returned by the result group.

## Declaration

```objectivec
@property (readonly) NSUInteger resultCount;
```

<a id="Discussion"></a>

## Discussion

For performance reasons, you should use this property rather than checking the `count` property on [results](results.md).

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [resultAtIndex:](result%28at_%29.md): Returns the query result at a specific index.
- [subgroups](subgroups.md): An array containing the result group’s subgroups.
