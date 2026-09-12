> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquerydelegate/metadataquery(_:replacementobjectforresultobject:)](https://developer.apple.com/documentation/foundation/nsmetadataquerydelegate/metadataquery(_:replacementobjectforresultobject:))

# metadataQuery(\_:replacementObjectForResultObject:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a different object for a given query result object.

## Declaration

```swift
optional func metadataQuery(_ query: NSMetadataQuery, replacementObjectForResultObject result: NSMetadataItem) -> Any
```

## Parameters

- `query`: The query that produced the result object to replace.
- `result`: The query result object to replace.

<a id="return-value"></a>

## Return Value

Object that replaces the query result object.

<a id="Discussion"></a>

## Discussion

By default query result objects are instances of the [NSMetadataItem](../nsmetadataitem.md) class. By implementing this method, you can return an object of a different class type for the specified result object.

## See Also

### Related Documentation

- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)

### Getting Query Results

- [metadataQuery(\_:replacementValueForAttribute:value:)](metadataquery%28__replacementvalueforattribute_value_%29.md): Returns a different value for a given attribute and value.

# metadataQuery:replacementObjectForResultObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a different object for a given query result object.

## Declaration

```objectivec
- (id) metadataQuery:(NSMetadataQuery *) query replacementObjectForResultObject:(NSMetadataItem *) result;
```

## Parameters

- `query`: The query that produced the result object to replace.
- `result`: The query result object to replace.

<a id="return-value"></a>

## Return Value

Object that replaces the query result object.

<a id="Discussion"></a>

## Discussion

By default query result objects are instances of the [NSMetadataItem](../nsmetadataitem.md) class. By implementing this method, you can return an object of a different class type for the specified result object.

## See Also

### Related Documentation

- [File Metadata Search Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/Introduction.html#//apple_ref/doc/uid/TP40001841)

### Getting Query Results

- [metadataQuery:replacementValueForAttribute:value:](metadataquery%28__replacementvalueforattribute_value_%29.md): Returns a different value for a given attribute and value.
