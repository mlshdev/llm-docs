> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltensordescriptor/usage

# usage (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A set of contexts in which you can use tensors you create with this descriptor.

## Declaration

```swift
var usage: MTLTensorUsage { get set }
```

<a id="discussion"></a>

## Discussion

The default value for this property is a bitwise `OR` of:

- [render](../mtltensorusage/render.md)
- [compute](../mtltensorusage/compute.md)

# usage (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A set of contexts in which you can use tensors you create with this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTensorUsage usage;
```

<a id="discussion"></a>

## Discussion

The default value for this property is a bitwise `OR` of:

- [MTLTensorUsageRender](../mtltensorusage/render.md)
- [MTLTensorUsageCompute](../mtltensorusage/compute.md)
