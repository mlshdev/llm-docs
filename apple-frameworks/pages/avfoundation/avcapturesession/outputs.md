> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/outputs](https://developer.apple.com/documentation/avfoundation/avcapturesession/outputs)

# outputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The output destinations to which a captures session sends its data.

## Declaration

```swift
var outputs: [AVCaptureOutput] { get }
```

<a id="Discussion"></a>

## Discussion

You add new outputs to a capture session by calling its [addOutput(\_:)](addoutput%28__%29.md) method.

## See Also

### Configuring outputs

- [canAddOutput(\_:)](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput(\_:)](addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput(\_:)](removeoutput%28__%29.md): Removes an output from a capture session.

# outputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The output destinations to which a captures session sends its data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof AVCaptureOutput *> * outputs;
```

<a id="Discussion"></a>

## Discussion

You add new outputs to a capture session by calling its [addOutput:](addoutput%28__%29.md) method.

## See Also

### Configuring outputs

- [canAddOutput:](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput:](addoutput%28__%29.md): Adds an output to the capture session.
- [removeOutput:](removeoutput%28__%29.md): Removes an output from a capture session.
