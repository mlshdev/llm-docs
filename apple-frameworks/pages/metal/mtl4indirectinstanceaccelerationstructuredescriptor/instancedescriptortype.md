> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4indirectinstanceaccelerationstructuredescriptor/instancedescriptortype

# instanceDescriptorType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the type of instance descriptor that the instance descriptor buffer references.

## Declaration

```swift
var instanceDescriptorType: MTLAccelerationStructureInstanceDescriptorType { get set }
```

<a id="discussion"></a>

## Discussion

This value determines the layout Metal expects for the structs the instance descriptor buffer contains.

Defaults to `MTLAccelerationStructureInstanceDescriptorTypeIndirect`. Valid values for this property are `MTLAccelerationStructureInstanceDescriptorTypeIndirect` or `MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion`.

# instanceDescriptorType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the type of instance descriptor that the instance descriptor buffer references.

## Declaration

```objectivec
@property (nonatomic) MTLAccelerationStructureInstanceDescriptorType instanceDescriptorType;
```

<a id="discussion"></a>

## Discussion

This value determines the layout Metal expects for the structs the instance descriptor buffer contains.

Defaults to `MTLAccelerationStructureInstanceDescriptorTypeIndirect`. Valid values for this property are `MTLAccelerationStructureInstanceDescriptorTypeIndirect` or `MTLAccelerationStructureInstanceDescriptorTypeIndirectMotion`.
