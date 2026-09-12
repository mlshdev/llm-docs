> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/captionconversionvalidatorwithcaptions:timerange:conversionsettings:](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/captionconversionvalidatorwithcaptions:timerange:conversionsettings:)

# captionConversionValidatorWithCaptions:timeRange:conversionSettings:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A convenience initializer to create an object that validates captions for a conversion operation.

## Declaration

```objectivec
+ (instancetype) captionConversionValidatorWithCaptions:(NSArray<AVCaption *> *) captions timeRange:(CMTimeRange) timeRange conversionSettings:(NSDictionary<NSString *,id> *) conversionSettings;
```

## Parameters

- `captions`: The array of captions that the system validates.
- `timeRange`: The time range of the media timeline where the captions exist.
- `conversionSettings`: A dictionary that describes the conversion operation.

## See Also

### Creating a validator

- [initWithCaptions:timeRange:conversionSettings:](init%28captions_timerange_conversionsettings_%29.md): Creates an object that validates captions for a conversion operation.
