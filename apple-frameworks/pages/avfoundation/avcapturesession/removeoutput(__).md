> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/removeoutput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/removeoutput(_:))

# removeOutput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Removes an output from a capture session.

## Declaration

```swift
func removeOutput(_ output: AVCaptureOutput)
```

## Parameters

- `output`: An output to remove from the capture session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput(\_:)](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput(\_:)](addoutput%28__%29.md): Adds an output to the capture session.

# removeOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Removes an output from a capture session.

## Declaration

```objectivec
- (void) removeOutput:(AVCaptureOutput *) output;
```

## Parameters

- `output`: An output to remove from the capture session.

<a id="Discussion"></a>

## Discussion

You can call this method while the session is running.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput:](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [addOutput:](addoutput%28__%29.md): Adds an output to the capture session.
