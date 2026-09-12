> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquerydelegate/metadataquery(_:replacementvalueforattribute:value:)](https://developer.apple.com/documentation/foundation/nsmetadataquerydelegate/metadataquery(_:replacementvalueforattribute:value:))

# metadataQuery(\_:replacementValueForAttribute:value:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a different value for a given attribute and value.

## Declaration

```swift
optional func metadataQuery(_ query: NSMetadataQuery, replacementValueForAttribute attrName: String, value attrValue: Any) -> Any
```

## Parameters

- `query`: The query that produced the result object with `attrName`.
- `attrName`: The attribute in question.
- `attrValue`: The attribute value to replace.

<a id="return-value"></a>

## Return Value

Object that replaces the value of `attrName` in the result object

<a id="Discussion"></a>

## Discussion

The delegate implementation of this method could convert specific query attribute values to other attribute values, for example, converting date object values to formatted strings for display.

## See Also

### Getting Query Results

- [metadataQuery(\_:replacementObjectForResultObject:)](metadataquery%28__replacementobjectforresultobject_%29.md): Returns a different object for a given query result object.

# metadataQuery:replacementValueForAttribute:value: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a different value for a given attribute and value.

## Declaration

```objectivec
- (id) metadataQuery:(NSMetadataQuery *) query replacementValueForAttribute:(NSString *) attrName value:(id) attrValue;
```

## Parameters

- `query`: The query that produced the result object with `attrName`.
- `attrName`: The attribute in question.
- `attrValue`: The attribute value to replace.

<a id="return-value"></a>

## Return Value

Object that replaces the value of `attrName` in the result object

<a id="Discussion"></a>

## Discussion

The delegate implementation of this method could convert specific query attribute values to other attribute values, for example, converting date object values to formatted strings for display.

## See Also

### Getting Query Results

- [metadataQuery:replacementObjectForResultObject:](metadataquery%28__replacementobjectforresultobject_%29.md): Returns a different object for a given query result object.
