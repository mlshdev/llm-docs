> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/deviceinputwithdevice:error:](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/deviceinputwithdevice:error:)

# deviceInputWithDevice:error:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Returns a new input for the specified capture device.

## Declaration

```objectivec
+ (instancetype) deviceInputWithDevice:(AVCaptureDevice *) device error:(NSError **) outError;
```

## Parameters

- `device`: The device from which to capture input.
- `outError`: If an error occurs during initialization, upon return contains an `NSError` object describing the problem.

<a id="return-value"></a>

## Return Value

A new capture input.

## See Also

### Creating an input

- [initWithDevice:error:](init%28device_%29.md): Creates an input for the specified capture device.
