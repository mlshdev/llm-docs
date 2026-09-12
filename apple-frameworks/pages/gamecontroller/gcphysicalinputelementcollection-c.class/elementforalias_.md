> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-c.class/elementforalias:](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-c.class/elementforalias:)

# elementForAlias:

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the element in the collection that uses the specified alias.

## Declaration

```objectivec
- (Element) elementForAlias:(Key) alias;
```

## Parameters

- `alias`: An alias for the element.

<a id="return-value"></a>

## Return Value

An element in the collection.

## See Also

### Related Documentation

- [aliases](../gcphysicalinputelement/aliases.md): The element’s aliases to use when accessing it with the subscript notation.

### Accessing elements by key and alias

- [objectForKeyedSubscript:](objectforkeyedsubscript_.md): Returns the element in the collection for the specified key.
