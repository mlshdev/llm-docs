> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturedescriptor/destination](https://developer.apple.com/documentation/metal/mtlcapturedescriptor/destination)

# destination (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The destination for any captured command data.

## Declaration

```swift
var destination: MTLCaptureDestination { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCaptureDestination.developerTools](../mtlcapturedestination/developertools.md).

## See Also

### Setting capture parameters

- [captureObject](captureobject.md): The instance whose contents should be captured.
- [outputURL](outputurl.md): A URL for a file to write the capture data into.

# destination (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The destination for any captured command data.

## Declaration

```objectivec
@property (nonatomic, assign) MTLCaptureDestination destination;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCaptureDestinationDeveloperTools](../mtlcapturedestination/developertools.md).

## See Also

### Setting capture parameters

- [captureObject](captureobject.md): The instance whose contents should be captured.
- [outputURL](outputurl.md): A URL for a file to write the capture data into.
