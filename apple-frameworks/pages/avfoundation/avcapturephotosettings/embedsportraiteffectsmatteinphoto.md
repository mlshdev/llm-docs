> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/embedsportraiteffectsmatteinphoto](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/embedsportraiteffectsmatteinphoto)

# embedsPortraitEffectsMatteInPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.

## Declaration

```swift
var embedsPortraitEffectsMatteInPhoto: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true), which tells AV Foundation to embed the portrait effects matte images as HEIF and JPEG in the photo.

This property is ignored if [isPortraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false). AV Foundation includes the portrait effects matte only if both this property and [isPortraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md) are set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Capturing Portrait Effects matte

- [isPortraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md): Specifies whether a portrait effects matte should be captured along with the photo.

# embedsPortraitEffectsMatteInPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Specifies whether the portrait effects matte captured with ths photo should be written to the photo’s file structure.

## Declaration

```objectivec
@property (nonatomic) BOOL embedsPortraitEffectsMatteInPhoto;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true), which tells AV Foundation to embed the portrait effects matte images as HEIF and JPEG in the photo.

This property is ignored if [portraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md) is set to [false](https://developer.apple.com/documentation/swift/false). AV Foundation includes the portrait effects matte only if both this property and [portraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md) are set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Capturing Portrait Effects matte

- [portraitEffectsMatteDeliveryEnabled](isportraiteffectsmattedeliveryenabled.md): Specifies whether a portrait effects matte should be captured along with the photo.
