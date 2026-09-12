> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setvisiblefunctiontables(_:range:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setvisiblefunctiontables(_:range:))

# setVisibleFunctionTables(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.

## Declaration

```swift
func setVisibleFunctionTables(_ visibleFunctionTables: [(any MTLVisibleFunctionTable)?], range: Range<Int>)
```

## Parameters

- `visibleFunctionTables`: An array of visible-function tables the method encodes.
- `range`: A range of indices within the argument buffer for each element in `visibleFunctionTables`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding function tables

- [setVisibleFunctionTable(\_:index:)](setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setIntersectionFunctionTable(\_:index:)](setintersectionfunctiontable%28__index_%29.md): Encodes a reference to a ray-tracing intersection-function table into the argument buffer.
- [setIntersectionFunctionTables(\_:range:)](setintersectionfunctiontables%28__range_%29.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.
