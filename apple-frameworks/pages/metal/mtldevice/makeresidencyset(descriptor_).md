> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeresidencyset(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makeresidencyset(descriptor:))

# makeResidencySet(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a residency set, which can move resources in and out of memory residency.

## Declaration

```swift
func makeResidencySet(descriptor desc: MTLResidencySetDescriptor) throws -> any MTLResidencySet
```

## Parameters

- `desc`: A descriptor instance that configures the residency set the method creates.

<a id="return-value"></a>

## Return Value

A new [MTLResidencySet](../mtlresidencyset.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Create an [MTLResidencySet](../mtlresidencyset.md) by creating and configuring an [MTLResidencySetDescriptor](../mtlresidencysetdescriptor.md) instance and pass it to this method.

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) for more information.

# newResidencySetWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a residency set, which can move resources in and out of memory residency.

## Declaration

```objectivec
- (id<MTLResidencySet>) newResidencySetWithDescriptor:(MTLResidencySetDescriptor *) desc error:(NSError **) error;
```

## Parameters

- `desc`: A descriptor instance that configures the residency set the method creates.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A new [MTLResidencySet](../mtlresidencyset.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Create an [MTLResidencySet](../mtlresidencyset.md) by creating and configuring an [MTLResidencySetDescriptor](../mtlresidencysetdescriptor.md) instance and pass it to this method.

See [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md) for more information.
