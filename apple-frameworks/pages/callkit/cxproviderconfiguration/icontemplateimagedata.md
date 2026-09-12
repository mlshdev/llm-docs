> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/icontemplateimagedata](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/icontemplateimagedata)

# iconTemplateImageData (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The PNG data for the icon image to be displayed for the provider.

## Declaration

```swift
var iconTemplateImageData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The icon image should be a square with side length of 40 points. The alpha channel of the image is used to create a white image mask, which is used in the system native in-call UI for the button which takes the user from this system UI to the 3rd-party app.

## See Also

### Configuring Native Call UI

- [localizedName](localizedname.md): Deprecated. The localized name of the provider.
- [ringtoneSound](ringtonesound.md): The name of the sound resource in the app bundle to be used for the provider ringtone.

# iconTemplateImageData (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The PNG data for the icon image to be displayed for the provider.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSData * iconTemplateImageData;
```

<a id="Discussion"></a>

## Discussion

The icon image should be a square with side length of 40 points. The alpha channel of the image is used to create a white image mask, which is used in the system native in-call UI for the button which takes the user from this system UI to the 3rd-party app.

## See Also

### Configuring Native Call UI

- [localizedName](localizedname.md): Deprecated. The localized name of the provider.
- [ringtoneSound](ringtonesound.md): The name of the sound resource in the app bundle to be used for the provider ringtone.
