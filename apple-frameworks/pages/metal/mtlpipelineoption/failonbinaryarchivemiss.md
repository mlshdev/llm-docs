> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelineoption/failonbinaryarchivemiss](https://developer.apple.com/documentation/metal/mtlpipelineoption/failonbinaryarchivemiss)

# failOnBinaryArchiveMiss (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.

## Declaration

```swift
static var failOnBinaryArchiveMiss: MTLPipelineOption { get }
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

<a id="discussion"></a>

## Discussion

By default, Metal compiles the functions for a pipeline state if they aren’t in a binary archive. When you set this option, Metal returns an error instead of compiling a missing function.

## See Also

### Retrieving argument information

- [bufferTypeInfo](buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [argumentInfo](argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.

# MTLPipelineOptionFailOnBinaryArchiveMiss (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.

## Declaration

```objectivec
MTLPipelineOptionFailOnBinaryArchiveMiss
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

<a id="discussion"></a>

## Discussion

By default, Metal compiles the functions for a pipeline state if they aren’t in a binary archive. When you set this option, Metal returns an error instead of compiling a missing function.

## See Also

### Retrieving argument information

- [MTLPipelineOptionNone](mtlpipelineoptionnone.md): Don’t provide any reflection information.
- [MTLPipelineOptionBufferTypeInfo](buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [MTLPipelineOptionArgumentInfo](argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.
