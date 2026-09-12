> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstoreactionoptions](https://developer.apple.com/documentation/metal/mtlstoreactionoptions)

# MTLStoreActionOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Options that modify a store action.

> Store action options have no effect on Apple Silicon

## Declaration

```swift
struct MTLStoreActionOptions
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

This property modifies the intended behavior of the store actions in the [MTLStoreAction](mtlstoreaction.md) enumeration.

## Topics

### Using programmable sample positions

- [customSamplePositions](mtlstoreactionoptions/customsamplepositions.md): Deprecated. An option that stores data in a sample-position–agnostic representation.

### Initializers

- [init(rawValue:)](mtlstoreactionoptions/init%28rawvalue_%29.md): Deprecated. Creates a store action option from a raw integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.

# MTLStoreActionOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Options that modify a store action.

> Store action options have no effect on Apple Silicon

## Declaration

```objectivec
enum MTLStoreActionOptions : NSUInteger;
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

This property modifies the intended behavior of the store actions in the [MTLStoreAction](mtlstoreaction.md) enumeration.

## Topics

### Using programmable sample positions

- [MTLStoreActionOptionCustomSamplePositions](mtlstoreactionoptions/customsamplepositions.md): Deprecated. An option that stores data in a sample-position–agnostic representation.

### Enumeration Cases

- [MTLStoreActionOptionNone](mtlstoreactionoptions/mtlstoreactionoptionnone.md): Deprecated. An option that doesn’t modify the intended behavior of a store action.

## See Also

### Encoding a render pass in parallel

- [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md): An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.
- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.
