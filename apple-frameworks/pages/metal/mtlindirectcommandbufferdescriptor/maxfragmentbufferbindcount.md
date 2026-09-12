> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferdescriptor/maxfragmentbufferbindcount](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferdescriptor/maxfragmentbufferbindcount)

# maxFragmentBufferBindCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The maximum number of buffers that you can set per command for the fragment stage.

## Declaration

```swift
var maxFragmentBufferBindCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if [inheritBuffers](inheritbuffers.md) is [true](https://developer.apple.com/documentation/swift/true) or if you configured [commandTypes](commandtypes.md) for compute commands. Metal needs to reserve enough memory in each command to store this many arguments. Use the smallest value that works for all commands you plan to encode into the indirect command buffer.

## See Also

### Declaring the maximum number of argument buffers per command

- [maxVertexBufferBindCount](maxvertexbufferbindcount.md): The maximum number of buffers that you can set per command for the vertex stage.
- [maxKernelBufferBindCount](maxkernelbufferbindcount.md): The maximum number of buffers that you can set per command for the compute kernel.

# maxFragmentBufferBindCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The maximum number of buffers that you can set per command for the fragment stage.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxFragmentBufferBindCount;
```

<a id="discussion"></a>

## Discussion

Metal ignores this property if [inheritBuffers](inheritbuffers.md) is [true](https://developer.apple.com/documentation/swift/true) or if you configured [commandTypes](commandtypes.md) for compute commands. Metal needs to reserve enough memory in each command to store this many arguments. Use the smallest value that works for all commands you plan to encode into the indirect command buffer.

## See Also

### Declaring the maximum number of argument buffers per command

- [maxVertexBufferBindCount](maxvertexbufferbindcount.md): The maximum number of buffers that you can set per command for the vertex stage.
- [maxKernelBufferBindCount](maxkernelbufferbindcount.md): The maximum number of buffers that you can set per command for the compute kernel.
