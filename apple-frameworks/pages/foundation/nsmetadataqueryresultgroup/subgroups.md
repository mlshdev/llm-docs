> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataqueryresultgroup/subgroups](https://developer.apple.com/documentation/foundation/nsmetadataqueryresultgroup/subgroups)

# subgroups (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the result group’s subgroups.

## Declaration

```swift
var subgroups: [NSMetadataQueryResultGroup]? { get }
```

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [result(at:)](result%28at_%29.md): Returns the query result at a specific index.

# subgroups (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array containing the result group’s subgroups.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSMetadataQueryResultGroup *> * subgroups;
```

## See Also

### Getting Query Results

- [attribute](attribute.md): The result group’s attribute name.
- [value](value.md): The result group’s value.
- [results](results.md): An array containing the result group’s result objects.
- [resultCount](resultcount.md): The number of results returned by the result group.
- [resultAtIndex:](result%28at_%29.md): Returns the query result at a specific index.
