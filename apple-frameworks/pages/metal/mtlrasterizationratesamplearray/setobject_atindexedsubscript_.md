> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrasterizationratesamplearray/setobject:atindexedsubscript:

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Stores a sample value at the specified index.

## Declaration

```objectivec
- (void) setObject:(NSNumber *) value atIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `value`: The new value to set.
- `index`: The index of the element you want to set.

<a id="discussion"></a>

## Discussion

The method converts the value to a single precision floating-point value. If the index you specified is out of bounds, this method does nothing.

## See Also

### Accessing the array

- [objectAtIndexedSubscript:](objectatindexedsubscript_.md): Retrieves the sample value at the specified index.
