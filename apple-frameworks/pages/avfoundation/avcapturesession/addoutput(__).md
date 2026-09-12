> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/addoutput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/addoutput(_:))

# addOutput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Adds an output to the capture session.

## Declaration

```swift
func addOutput(_ output: AVCaptureOutput)
```

## Parameters

- `output`: An output to add to the session.

<a id="Discussion"></a>

## Discussion

You can only add an output to a session using this method if [canAddOutput(\_:)](canaddoutput%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

You can invoke this method while the session is running.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput(\_:)](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [removeOutput(\_:)](removeoutput%28__%29.md): Removes an output from a capture session.

# addOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Adds an output to the capture session.

## Declaration

```objectivec
- (void) addOutput:(AVCaptureOutput *) output;
```

## Parameters

- `output`: An output to add to the session.

<a id="Discussion"></a>

## Discussion

You can only add an output to a session using this method if [canAddOutput:](canaddoutput%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

You can invoke this method while the session is running.

## See Also

### Configuring outputs

- [outputs](outputs.md): The output destinations to which a captures session sends its data.
- [canAddOutput:](canaddoutput%28__%29.md): Determines whether you can add an output to a session.
- [removeOutput:](removeoutput%28__%29.md): Removes an output from a capture session.
