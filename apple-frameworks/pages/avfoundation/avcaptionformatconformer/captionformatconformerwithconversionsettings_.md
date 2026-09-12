> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionformatconformer/captionformatconformerwithconversionsettings:](https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/captionformatconformerwithconversionsettings:)

# captionFormatConformerWithConversionSettings:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A class method that creates a new object with format conversion settings.

## Declaration

```objectivec
+ (instancetype) captionFormatConformerWithConversionSettings:(NSDictionary<NSString *,id> *) conversionSettings;
```

## Parameters

- `conversionSettings`: A dictionary that specifies the conversion settings that this instance uses.

<a id="return-value"></a>

## Return Value

A new instance of [AVCaptionFormatConformer](../avcaptionformatconformer.md).

## See Also

### Creating a format conformer

- [initWithConversionSettings:](init%28conversionsettings_%29.md): Creates a new object with format conversion settings.
