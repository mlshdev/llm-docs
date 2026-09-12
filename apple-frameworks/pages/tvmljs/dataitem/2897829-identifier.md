> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/dataitem/2897829-identifier](https://developer.apple.com/documentation/tvmljs/dataitem/2897829-identifier)

# identifier

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

A unique identifier for a data item provided by the associated JSON object.

## Declaration

```
readonly attribute String identifier;
```

<a id="discussion"></a>

## Discussion

The `identifier` property is mapped to the [itemID](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/TVJSAttributes.html#//apple_ref/doc/uid/TP40015064-CH42-SW1) attribute when the data item is converted to a DOM element. The underlying JSON objects being mapped must have a unique identifier for all JSON objects grouped under the same type.

## See Also

### Retrieving Data Item Information

- [type](2897825-type.md): The type for a data item provided by the associated JSON object.
