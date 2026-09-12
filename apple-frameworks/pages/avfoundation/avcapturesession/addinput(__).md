> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/addinput(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/addinput(_:))

# addInput(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Adds a capture input to the session.

## Declaration

```swift
func addInput(_ input: AVCaptureInput)
```

## Parameters

- `input`: An input to add to the session.

<a id="Discussion"></a>

## Discussion

It’s only valid to call this method if [canAddInput(\_:)](canaddinput%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

You can invoke this method while the session is running.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [canAddInput(\_:)](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [removeInput(\_:)](removeinput%28__%29.md): Removes an input from the session.

# addInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Adds a capture input to the session.

## Declaration

```objectivec
- (void) addInput:(AVCaptureInput *) input;
```

## Parameters

- `input`: An input to add to the session.

<a id="Discussion"></a>

## Discussion

It’s only valid to call this method if [canAddInput:](canaddinput%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

You can invoke this method while the session is running.

## See Also

### Configuring inputs

- [inputs](inputs.md): The inputs that provide media data to a capture session.
- [canAddInput:](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [removeInput:](removeinput%28__%29.md): Removes an input from the session.
