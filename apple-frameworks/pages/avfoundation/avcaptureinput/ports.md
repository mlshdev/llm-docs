> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureinput/ports](https://developer.apple.com/documentation/avfoundation/avcaptureinput/ports)

# ports (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The ports available on a capture input.

## Declaration

```swift
var ports: [AVCaptureInput.Port] { get }
```

<a id="Discussion"></a>

## Discussion

Individual ports post an [formatDescriptionDidChangeNotification](port/formatdescriptiondidchangenotification.md) notification when their [formatDescription](port/formatdescription.md) changes.

## See Also

### Accessing ports

- [AVCaptureInput.Port](port.md): An object that represents a stream of data that a capture input provides.

# ports (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The ports available on a capture input.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureInputPort *> * ports;
```

<a id="Discussion"></a>

## Discussion

Individual ports post an [AVCaptureInputPortFormatDescriptionDidChangeNotification](port/formatdescriptiondidchangenotification.md) notification when their [formatDescription](port/formatdescription.md) changes.

## See Also

### Accessing ports

- [AVCaptureInputPort](port.md): An object that represents a stream of data that a capture input provides.
