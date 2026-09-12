> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setintersectionfunctiontables:withrange:](https://developer.apple.com/documentation/metal/mtlargumentencoder/setintersectionfunctiontables:withrange:)

# setIntersectionFunctionTables:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.

## Declaration

```objectivec
- (void) setIntersectionFunctionTables:(id<MTLIntersectionFunctionTable> const[]) intersectionFunctionTables withRange:(NSRange) range;
```

## Parameters

- `intersectionFunctionTables`: An array of intersection-function tables the method encodes.
- `range`: A range of indices within the argument buffer for each element in `intersectionFunctionTables`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding function tables

- [setVisibleFunctionTable:atIndex:](setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setVisibleFunctionTables:withRange:](setvisiblefunctiontables_withrange_.md): Encodes references to an array of visible function tables into the argument buffer.
- [setIntersectionFunctionTable:atIndex:](setintersectionfunctiontable%28__index_%29.md): Encodes a reference to a ray-tracing intersection-function table into the argument buffer.
