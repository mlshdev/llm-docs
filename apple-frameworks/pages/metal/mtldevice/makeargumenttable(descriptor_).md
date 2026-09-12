> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeargumenttable(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makeargumenttable(descriptor:))

# makeArgumentTable(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new argument table from an argument table descriptor.

## Declaration

```swift
func makeArgumentTable(descriptor: MTL4ArgumentTableDescriptor) throws -> any MTL4ArgumentTable
```

## Parameters

- `descriptor`: A [MTL4ArgumentTableDescriptor](../mtl4argumenttabledescriptor.md) instance that configures the [MTL4ArgumentTable](../mtl4argumenttable.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4ArgumentTable](../mtl4argumenttable.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# newArgumentTableWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new argument table from an argument table descriptor.

## Declaration

```objectivec
- (id<MTL4ArgumentTable>) newArgumentTableWithDescriptor:(MTL4ArgumentTableDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A [MTL4ArgumentTableDescriptor](../mtl4argumenttabledescriptor.md) instance that configures the [MTL4ArgumentTable](../mtl4argumenttable.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4ArgumentTable](../mtl4argumenttable.md) instance, or `nil` if the function failed.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
