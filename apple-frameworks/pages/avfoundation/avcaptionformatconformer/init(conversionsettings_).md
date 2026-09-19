> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/init(conversionsettings:)

# init(conversionSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a new object with format conversion settings.

## Declaration

```swift
init(conversionSettings: [AVCaptionSettingsKey : Any])
```

## Parameters

- `conversionSettings`: A dictionary that specifies the conversion settings that this instance uses.

# initWithConversionSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a new object with format conversion settings.

## Declaration

```objectivec
- (instancetype) initWithConversionSettings:(NSDictionary<NSString *,id> *) conversionSettings;
```

## Parameters

- `conversionSettings`: A dictionary that specifies the conversion settings that this instance uses.

## See Also

### Creating a format conformer

- [captionFormatConformerWithConversionSettings:](captionformatconformerwithconversionsettings_.md): A class method that creates a new object with format conversion settings.
