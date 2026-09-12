> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/makevisiblefunctiontable(descriptor:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/makevisiblefunctiontable(descriptor:))

# makeVisibleFunctionTable(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new visible function table.

## Declaration

```swift
func makeVisibleFunctionTable(descriptor: MTLVisibleFunctionTableDescriptor) -> (any MTLVisibleFunctionTable)?
```

## Parameters

- `descriptor`: An [MTLVisibleFunctionTableDescriptor](../mtlvisiblefunctiontabledescriptor.md) instance that configures the created table.

<a id="return-value"></a>

## Return Value

A new visible function table, or `nil` if an error occurred in creation.

## See Also

### Creating function tables

- [makeIntersectionFunctionTable(descriptor:)](makeintersectionfunctiontable%28descriptor_%29.md): Creates a new intersection function table.

# newVisibleFunctionTableWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new visible function table.

## Declaration

```objectivec
- (id<MTLVisibleFunctionTable>) newVisibleFunctionTableWithDescriptor:(MTLVisibleFunctionTableDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLVisibleFunctionTableDescriptor](../mtlvisiblefunctiontabledescriptor.md) instance that configures the created table.

<a id="return-value"></a>

## Return Value

A new visible function table, or `nil` if an error occurred in creation.

## See Also

### Creating function tables

- [newIntersectionFunctionTableWithDescriptor:](makeintersectionfunctiontable%28descriptor_%29.md): Creates a new intersection function table.
