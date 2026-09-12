> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/inputs](https://developer.apple.com/documentation/avfoundation/avcapturesession/inputs)

# inputs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The inputs that provide media data to a capture session.

## Declaration

```swift
var inputs: [AVCaptureInput] { get }
```

<a id="Discussion"></a>

## Discussion

You add new inputs to a capture session by callings its [addInput(\_:)](addinput%28__%29.md) method.

## See Also

### Configuring inputs

- [canAddInput(\_:)](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput(\_:)](addinput%28__%29.md): Adds a capture input to the session.
- [removeInput(\_:)](removeinput%28__%29.md): Removes an input from the session.

# inputs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The inputs that provide media data to a capture session.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof AVCaptureInput *> * inputs;
```

<a id="Discussion"></a>

## Discussion

You add new inputs to a capture session by callings its [addInput:](addinput%28__%29.md) method.

## See Also

### Configuring inputs

- [canAddInput:](canaddinput%28__%29.md): Determines whether you can add an input to a session.
- [addInput:](addinput%28__%29.md): Adds a capture input to the session.
- [removeInput:](removeinput%28__%29.md): Removes an input from the session.
