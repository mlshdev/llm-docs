> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/makeintersectionfunctiontable(descriptor:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/makeintersectionfunctiontable(descriptor:))

# makeIntersectionFunctionTable(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new intersection function table.

## Declaration

```swift
func makeIntersectionFunctionTable(descriptor: MTLIntersectionFunctionTableDescriptor) -> (any MTLIntersectionFunctionTable)?
```

## Parameters

- `descriptor`: An [MTLIntersectionFunctionTableDescriptor](../mtlintersectionfunctiontabledescriptor.md) instance that configures the created table.

<a id="return-value"></a>

## Return Value

A new intersection function table, or `nil` if an error occurred in creation.

## See Also

### Creating function tables

- [makeVisibleFunctionTable(descriptor:)](makevisiblefunctiontable%28descriptor_%29.md): Creates a new visible function table.

# newIntersectionFunctionTableWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new intersection function table.

## Declaration

```objectivec
- (id<MTLIntersectionFunctionTable>) newIntersectionFunctionTableWithDescriptor:(MTLIntersectionFunctionTableDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLIntersectionFunctionTableDescriptor](../mtlintersectionfunctiontabledescriptor.md) instance that configures the created table.

<a id="return-value"></a>

## Return Value

A new intersection function table, or `nil` if an error occurred in creation.

## See Also

### Creating function tables

- [newVisibleFunctionTableWithDescriptor:](makevisiblefunctiontable%28descriptor_%29.md): Creates a new visible function table.
