> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/removeinput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/removeinput(_:))

# removeInput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Removes an input from the session.

## Declaration

```swift
func removeInput(_ input: AVCaptureInput)
```

## Parameters

- `input`: An input to remove from the capture session.

<a id="Discussion"></a>

## Discussion

You can invoke this method while the session is running.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [canAddInput(\_:)](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput(\_:)](addinput%28__%29.md): Adds a capture input to the session.

# removeInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Removes an input from the session.

## Declaration

```objectivec
- (void) removeInput:(AVCaptureInput *) input;
```

## Parameters

- `input`: An input to remove from the capture session.

<a id="Discussion"></a>

## Discussion

You can invoke this method while the session is running.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [canAddInput:](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput:](addinput%28__%29.md): Adds a capture input to the session.
