> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferdescriptor/inheritbuffers](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferdescriptor/inheritbuffers)

# inheritBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value that determines where commands in the indirect command buffer get their buffer arguments from when you execute them.

## Declaration

```swift
var inheritBuffers: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Always set this property explicitly.

If you set the value to [true](https://developer.apple.com/documentation/swift/true), don’t set buffer arguments when you encode commands into the indirect command buffer. The commands use (inherit) the buffer arguments that you set on the parent encoder.

If you set the value to [false](https://developer.apple.com/documentation/swift/false), set the buffer arguments when you encode the commands into the indirect command buffer. The commands ignore any buffer arguments set on the parent encoder.

## See Also

### Declaring command inheritance

- [inheritPipelineState](inheritpipelinestate.md): A Boolean value that determines where commands in the indirect command buffer get their pipeline state from when you execute them.

# inheritBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value that determines where commands in the indirect command buffer get their buffer arguments from when you execute them.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL inheritBuffers;
```

<a id="discussion"></a>

## Discussion

Always set this property explicitly.

If you set the value to [true](https://developer.apple.com/documentation/swift/true), don’t set buffer arguments when you encode commands into the indirect command buffer. The commands use (inherit) the buffer arguments that you set on the parent encoder.

If you set the value to [false](https://developer.apple.com/documentation/swift/false), set the buffer arguments when you encode the commands into the indirect command buffer. The commands ignore any buffer arguments set on the parent encoder.

## See Also

### Declaring command inheritance

- [inheritPipelineState](inheritpipelinestate.md): A Boolean value that determines where commands in the indirect command buffer get their pipeline state from when you execute them.
