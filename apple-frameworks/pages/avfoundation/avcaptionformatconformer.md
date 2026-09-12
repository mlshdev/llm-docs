> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionformatconformer](https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer)

# AVCaptionFormatConformer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that converts a canonical caption to a specific format.

## Declaration

```swift
class AVCaptionFormatConformer
```

## Topics

### Creating a format conformer

- [init(conversionSettings:)](avcaptionformatconformer/init%28conversionsettings_%29.md): Creates a new object with format conversion settings.

### Conforming captions

- [conformsCaptionsToTimeRange](avcaptionformatconformer/conformscaptionstotimerange.md): A Boolean value that indicates whether to conform the time range of a canonical caption.
- [conformedCaption(for:)](avcaptionformatconformer/conformedcaption%28for_%29.md): Creates a caption that conforms to a specific format.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Conversion and validation

- [AVCaptionSettingsKey](avcaptionsettingskey.md): A structure that defines dictionary keys to configure the caption converter and validator.
- [AVCaptionConversionValidator](avcaptionconversionvalidator.md): An object that validates captions for a conversion operation.

# AVCaptionFormatConformer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that converts a canonical caption to a specific format.

## Declaration

```objectivec
@interface AVCaptionFormatConformer : NSObject
```

## Topics

### Creating a format conformer

- [initWithConversionSettings:](avcaptionformatconformer/init%28conversionsettings_%29.md): Creates a new object with format conversion settings.
- [captionFormatConformerWithConversionSettings:](avcaptionformatconformer/captionformatconformerwithconversionsettings_.md): A class method that creates a new object with format conversion settings.

### Conforming captions

- [conformsCaptionsToTimeRange](avcaptionformatconformer/conformscaptionstotimerange.md): A Boolean value that indicates whether to conform the time range of a canonical caption.
- [conformedCaptionForCaption:error:](avcaptionformatconformer/conformedcaption%28for_%29.md): Creates a caption that conforms to a specific format.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Conversion and validation

- [AVCaptionSettingsKey](avcaptionsettingskey.md): A structure that defines dictionary keys to configure the caption converter and validator.
- [AVCaptionConversionValidator](avcaptionconversionvalidator.md): An object that validates captions for a conversion operation.
