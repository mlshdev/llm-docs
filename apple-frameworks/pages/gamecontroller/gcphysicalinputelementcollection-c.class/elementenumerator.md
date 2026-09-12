> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputelementcollection-c.class/elementenumerator](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputelementcollection-c.class/elementenumerator)

# elementEnumerator

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns an enumerator to iterate the elements in the collection.

## Declaration

```objectivec
- (NSEnumerator<id<GCPhysicalInputElement>> *) elementEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator for the collection.

## See Also

### Getting elements in the collection

- [count](count.md): The number of elements in the collection.
