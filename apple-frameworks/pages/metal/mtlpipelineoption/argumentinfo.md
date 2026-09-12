> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelineoption/argumentinfo](https://developer.apple.com/documentation/metal/mtlpipelineoption/argumentinfo)

# argumentInfo (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An option instance that provides argument information for textures and threadgroup memory.

## Declaration

```swift
static var argumentInfo: MTLPipelineOption { get }
```

<a id="discussion"></a>

## Discussion

This option provides all properties of an [MTLArgument](../mtlargument.md) instance, except for [bufferStructType](../mtlargument/bufferstructtype.md) and [bufferPointerType](../mtlargument/bufferpointertype.md), which are `nil`. To obtain these detailed buffer type properties, retrieve the [bufferTypeInfo](buffertypeinfo.md) instance.

## See Also

### Retrieving argument information

- [bufferTypeInfo](buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [failOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.

# MTLPipelineOptionArgumentInfo (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An option instance that provides argument information for textures and threadgroup memory.

## Declaration

```objectivec
MTLPipelineOptionArgumentInfo
```

<a id="discussion"></a>

## Discussion

This option provides all properties of an [MTLArgument](../mtlargument.md) instance, except for [bufferStructType](../mtlargument/bufferstructtype.md) and [bufferPointerType](../mtlargument/bufferpointertype.md), which are `nil`. To obtain these detailed buffer type properties, retrieve the [MTLPipelineOptionBufferTypeInfo](buffertypeinfo.md) instance.

## See Also

### Retrieving argument information

- [MTLPipelineOptionNone](mtlpipelineoptionnone.md): Don’t provide any reflection information.
- [MTLPipelineOptionBufferTypeInfo](buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [MTLPipelineOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
