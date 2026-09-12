> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-c.class/objectforkeyedsubscript:](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-c.class/objectforkeyedsubscript:)

# objectForKeyedSubscript:

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the element in the collection for the specified key.

## Declaration

```objectivec
- (Element) objectForKeyedSubscript:(Key) key;
```

## Parameters

- `key`: The key that identifies the element.

<a id="return-value"></a>

## Return Value

An element in the collection.

## See Also

### Accessing elements by key and alias

- [elementForAlias:](elementforalias_.md): Returns the element in the collection that uses the specified alias.
