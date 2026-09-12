> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionsettingskey](https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey)

# AVCaptionSettingsKey (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A structure that defines dictionary keys to configure the caption converter and validator.

## Declaration

```swift
struct AVCaptionSettingsKey
```

## Topics

### Keys

- [mediaType](avcaptionsettingskey/mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [mediaSubType](avcaptionsettingskey/mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [timeCodeFrameDuration](avcaptionsettingskey/timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.
- [useDropFrameTimeCode](avcaptionsettingskey/usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.

### Initializers

- [init(rawValue:)](avcaptionsettingskey/init%28rawvalue_%29.md): Creates a settings key with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Conversion and validation

- [AVCaptionFormatConformer](avcaptionformatconformer.md): An object that converts a canonical caption to a specific format.
- [AVCaptionConversionValidator](avcaptionconversionvalidator.md): An object that validates captions for a conversion operation.

# AVCaptionSettingsKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A structure that defines dictionary keys to configure the caption converter and validator.

## Declaration

```objectivec
typedef NSString * AVCaptionSettingsKey;
```

## Topics

### Keys

- [AVCaptionMediaTypeKey](avcaptionsettingskey/mediatype.md): A key that identifies the output media type of a caption conversion operation.
- [AVCaptionMediaSubTypeKey](avcaptionsettingskey/mediasubtype.md): A key that identifies the output media subtype of a caption conversion operation.
- [AVCaptionTimeCodeFrameDurationKey](avcaptionsettingskey/timecodeframeduration.md): A key that identifies the frame duration that the system uses for the time code.
- [AVCaptionUseDropFrameTimeCodeKey](avcaptionsettingskey/usedropframetimecode.md): A key that identifies whether the system uses drop frame time code.

## See Also

### Conversion and validation

- [AVCaptionFormatConformer](avcaptionformatconformer.md): An object that converts a canonical caption to a specific format.
- [AVCaptionConversionValidator](avcaptionconversionvalidator.md): An object that validates captions for a conversion operation.
