> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/init(captions:timerange:conversionsettings:)](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/init(captions:timerange:conversionsettings:))

# init(captions:timeRange:conversionSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates an object that validates captions for a conversion operation.

## Declaration

```swift
init(captions: [AVCaption], timeRange: CMTimeRange, conversionSettings: [AVCaptionSettingsKey : Any])
```

## Parameters

- `captions`: The array of captions that the system validates.
- `timeRange`: The time range of the media timeline where the captions exist.
- `conversionSettings`: A dictionary that describes the conversion operation.

# initWithCaptions:timeRange:conversionSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates an object that validates captions for a conversion operation.

## Declaration

```objectivec
- (instancetype) initWithCaptions:(NSArray<AVCaption *> *) captions timeRange:(CMTimeRange) timeRange conversionSettings:(NSDictionary<NSString *,id> *) conversionSettings;
```

## Parameters

- `captions`: The array of captions that the system validates.
- `timeRange`: The time range of the media timeline where the captions exist.
- `conversionSettings`: A dictionary that describes the conversion operation.

## See Also

### Creating a validator

- [captionConversionValidatorWithCaptions:timeRange:conversionSettings:](captionconversionvalidatorwithcaptions_timerange_conversionsettings_.md): A convenience initializer to create an object that validates captions for a conversion operation.
