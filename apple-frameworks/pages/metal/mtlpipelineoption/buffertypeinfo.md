> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelineoption/buffertypeinfo](https://developer.apple.com/documentation/metal/mtlpipelineoption/buffertypeinfo)

# bufferTypeInfo (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An option instance that provides detailed buffer type information for buffer arguments.

## Declaration

```swift
static var bufferTypeInfo: MTLPipelineOption { get }
```

<a id="discussion"></a>

## Discussion

This option provides the [bufferStructType](../mtlargument/bufferstructtype.md) and [bufferPointerType](../mtlargument/bufferpointertype.md) properties for the [MTLPipelineOption](../mtlpipelineoption.md) stored in [argumentInfo](argumentinfo.md).

## See Also

### Retrieving argument information

- [failOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [argumentInfo](argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.

# MTLPipelineOptionBufferTypeInfo (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An option instance that provides detailed buffer type information for buffer arguments.

## Declaration

```objectivec
MTLPipelineOptionBufferTypeInfo
```

<a id="discussion"></a>

## Discussion

This option provides the [bufferStructType](../mtlargument/bufferstructtype.md) and [bufferPointerType](../mtlargument/bufferpointertype.md) properties for the [MTLPipelineOption](../mtlpipelineoption.md) stored in [MTLPipelineOptionArgumentInfo](argumentinfo.md).

## See Also

### Retrieving argument information

- [MTLPipelineOptionNone](mtlpipelineoptionnone.md): Don’t provide any reflection information.
- [MTLPipelineOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLPipelineOptionArgumentInfo](argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.
