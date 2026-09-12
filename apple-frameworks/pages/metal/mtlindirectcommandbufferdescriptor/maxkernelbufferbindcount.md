> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferdescriptor/maxkernelbufferbindcount](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferdescriptor/maxkernelbufferbindcount)

# maxKernelBufferBindCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

The maximum number of buffers that you can set per command for the compute kernel.

## Declaration

```swift
var maxKernelBufferBindCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if [inheritBuffers](inheritbuffers.md) is [true](https://developer.apple.com/documentation/swift/true) or if you configured [commandTypes](commandtypes.md) for rendering commands. Metal needs to reserve enough memory in each command to store this many arguments. Use the smallest value that works for all commands you plan to encode into the indirect command buffer.

## See Also

### Declaring the maximum number of argument buffers per command

- [maxVertexBufferBindCount](maxvertexbufferbindcount.md): The maximum number of buffers that you can set per command for the vertex stage.
- [maxFragmentBufferBindCount](maxfragmentbufferbindcount.md): The maximum number of buffers that you can set per command for the fragment stage.

# maxKernelBufferBindCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

The maximum number of buffers that you can set per command for the compute kernel.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxKernelBufferBindCount;
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if [inheritBuffers](inheritbuffers.md) is [true](https://developer.apple.com/documentation/swift/true) or if you configured [commandTypes](commandtypes.md) for rendering commands. Metal needs to reserve enough memory in each command to store this many arguments. Use the smallest value that works for all commands you plan to encode into the indirect command buffer.

## See Also

### Declaring the maximum number of argument buffers per command

- [maxVertexBufferBindCount](maxvertexbufferbindcount.md): The maximum number of buffers that you can set per command for the vertex stage.
- [maxFragmentBufferBindCount](maxfragmentbufferbindcount.md): The maximum number of buffers that you can set per command for the fragment stage.
