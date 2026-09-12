> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setintersectionfunctiontable(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setintersectionfunctiontable(_:index:))

# setIntersectionFunctionTable(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a reference to a ray-tracing intersection-function table into the argument buffer.

## Declaration

```swift
func setIntersectionFunctionTable(_ intersectionFunctionTable: (any MTLIntersectionFunctionTable)?, index: Int)
```

## Parameters

- `intersectionFunctionTable`: An intersection-function table the method encodes.
- `index`: An index of an intersection-function table within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding function tables

- [setVisibleFunctionTable(\_:index:)](setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setIntersectionFunctionTables(\_:range:)](setintersectionfunctiontables%28__range_%29.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.
- [setVisibleFunctionTables(\_:range:)](setvisiblefunctiontables%28__range_%29.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.

# setIntersectionFunctionTable:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a reference to a ray-tracing intersection-function table into the argument buffer.

## Declaration

```objectivec
- (void) setIntersectionFunctionTable:(id<MTLIntersectionFunctionTable>) intersectionFunctionTable atIndex:(NSUInteger) index;
```

## Parameters

- `intersectionFunctionTable`: An intersection-function table the method encodes.
- `index`: An index of an intersection-function table within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding function tables

- [setVisibleFunctionTable:atIndex:](setvisiblefunctiontable%28__index_%29.md): Encodes a reference to a visible-function table into the argument buffer.
- [setVisibleFunctionTables:withRange:](setvisiblefunctiontables_withrange_.md): Encodes references to an array of visible function tables into the argument buffer.
- [setIntersectionFunctionTables:withRange:](setintersectionfunctiontables_withrange_.md): Encodes references to an array of ray-tracing intersection-function tables into the argument buffer.
