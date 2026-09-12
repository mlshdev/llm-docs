> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratesamplearray/objectatindexedsubscript:](https://developer.apple.com/documentation/metal/mtlrasterizationratesamplearray/objectatindexedsubscript:)

# objectAtIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Retrieves the sample value at the specified index.

## Declaration

```objectivec
- (NSNumber *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: The index of the element to retrieve.

<a id="return-value"></a>

## Return Value

An [NSNumber](../../foundation/nsnumber.md) object. It contains the value of the sample at the specified index or `0` if the index you specified is out of bounds.

## See Also

### Accessing the array

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Stores a sample value at the specified index.
