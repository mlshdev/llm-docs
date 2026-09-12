> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferdescriptor/inheritpipelinestate](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferdescriptor/inheritpipelinestate)

# inheritPipelineState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines where commands in the indirect command buffer get their pipeline state from when you execute them.

## Declaration

```swift
var inheritPipelineState: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If the value is [false](https://developer.apple.com/documentation/swift/false), set the pipeline state object when you encode the commands into the indirect command buffer. The commands ignore any pipeline state object set on the parent encoder.

If you set the value to [true](https://developer.apple.com/documentation/swift/true), don’t set a pipeline state object when you encode commands into the indirect command buffer. The commands use (inherit) the pipeline stage object that you set on the parent encoder.

This property doesn’t exist in iOS 12 and earlier, and tvOS 12 and earlier. If you create an indirect command buffer on those systems, it inherits the pipeline state, exactly as if the property existed, with a value of [true](https://developer.apple.com/documentation/swift/true). If you need your app to run on earlier versions of iOS, use an availability attribute to set the property conditionally:

**Swift**

```swift
if #available(iOS 13.0, tvOS 13, *) {
    descriptor.inheritPipelineState = true
}
```

**Objective-C**

```objective-c
if (@available(iOS 13.0, tvOS 13.0, *)) {
    descriptor.inheritPipelineState = YES;
}
```

## See Also

### Declaring command inheritance

- [inheritBuffers](inheritbuffers.md): A Boolean value that determines where commands in the indirect command buffer get their buffer arguments from when you execute them.

# inheritPipelineState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that determines where commands in the indirect command buffer get their pipeline state from when you execute them.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL inheritPipelineState;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If the value is [false](https://developer.apple.com/documentation/swift/false), set the pipeline state object when you encode the commands into the indirect command buffer. The commands ignore any pipeline state object set on the parent encoder.

If you set the value to [true](https://developer.apple.com/documentation/swift/true), don’t set a pipeline state object when you encode commands into the indirect command buffer. The commands use (inherit) the pipeline stage object that you set on the parent encoder.

This property doesn’t exist in iOS 12 and earlier, and tvOS 12 and earlier. If you create an indirect command buffer on those systems, it inherits the pipeline state, exactly as if the property existed, with a value of [true](https://developer.apple.com/documentation/swift/true). If you need your app to run on earlier versions of iOS, use an availability attribute to set the property conditionally:

**Swift**

```swift
if #available(iOS 13.0, tvOS 13, *) {
    descriptor.inheritPipelineState = true
}
```

**Objective-C**

```objective-c
if (@available(iOS 13.0, tvOS 13.0, *)) {
    descriptor.inheritPipelineState = YES;
}
```

## See Also

### Declaring command inheritance

- [inheritBuffers](inheritbuffers.md): A Boolean value that determines where commands in the indirect command buffer get their buffer arguments from when you execute them.
