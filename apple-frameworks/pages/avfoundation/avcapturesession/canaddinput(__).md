> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/canaddinput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/canaddinput(_:))

# canAddInput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Determines whether you can add an input to a session.

## Declaration

```swift
func canAddInput(_ input: AVCaptureInput) -> Bool
```

## Parameters

- `input`: An input to add to the session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input to the session; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if you can’t add an input to a capture session. This occurs, for example, if you attempt to add the input to a session twice, or if the input already belongs to another capture session.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [addInput(\_:)](addinput%28__%29.md): Adds a capture input to the session.
- [removeInput(\_:)](removeinput%28__%29.md): Removes an input from the session.

# canAddInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Determines whether you can add an input to a session.

## Declaration

```objectivec
- (BOOL) canAddInput:(AVCaptureInput *) input;
```

## Parameters

- `input`: An input to add to the session.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you can add the input to the session; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns [false](https://developer.apple.com/documentation/swift/false) if you can’t add an input to a capture session. This occurs, for example, if you attempt to add the input to a session twice, or if the input already belongs to another capture session.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [addInput:](addinput%28__%29.md): Adds a capture input to the session.
- [removeInput:](removeinput%28__%29.md): Removes an input from the session.
