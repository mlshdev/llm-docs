> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotobracketsettings/islensstabilizationenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/islensstabilizationenabled)

# isLensStabilizationEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to stabilize the lens for the duration of the bracketed capture.

## Declaration

```swift
var isLensStabilizationEnabled: Bool { get set }
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)

<a id="Discussion"></a>

## Discussion

When this setting is [true](https://developer.apple.com/documentation/swift/true), the photo output uses optical image stabilization to hold the lens steady for the duration of the bracketed capture, helping to counter hand shake and produce a sharper bracket of images. The default setting is [false](https://developer.apple.com/documentation/swift/false).

You can enable this setting only if the photo output’s [isLensStabilizationDuringBracketedCaptureSupported](../avcapturephotooutput/islensstabilizationduringbracketedcapturesupported.md) property is [true](https://developer.apple.com/documentation/swift/true). The capture output validates this requirement when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet this requirement, that method raises an exception.

## See Also

### Working with bracketed settings

- [bracketedSettings](bracketedsettings.md): An array describing the number of and settings for images to produce in a bracketed capture.

# lensStabilizationEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to stabilize the lens for the duration of the bracketed capture.

## Declaration

```objectivec
@property (nonatomic, getter=isLensStabilizationEnabled) BOOL lensStabilizationEnabled;
```

## Mentioned In

- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)

<a id="Discussion"></a>

## Discussion

When this setting is [true](https://developer.apple.com/documentation/swift/true), the photo output uses optical image stabilization to hold the lens steady for the duration of the bracketed capture, helping to counter hand shake and produce a sharper bracket of images. The default setting is [false](https://developer.apple.com/documentation/swift/false).

You can enable this setting only if the photo output’s [lensStabilizationDuringBracketedCaptureSupported](../avcapturephotooutput/islensstabilizationduringbracketedcapturesupported.md) property is [true](https://developer.apple.com/documentation/swift/true). The capture output validates this requirement when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate do not meet this requirement, that method raises an exception.

## See Also

### Working with bracketed settings

- [bracketedSettings](bracketedsettings.md): An array describing the number of and settings for images to produce in a bracketed capture.
