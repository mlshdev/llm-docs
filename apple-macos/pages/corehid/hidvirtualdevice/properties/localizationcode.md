> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/localizationcode](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/localizationcode)

# localizationCode

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A device localization code that specifies the HID compliant localization code.

## Declaration

```swift
let localizationCode: HIDDeviceLocalizationCode?
```

<a id="discussion"></a>

## Discussion

The localization code can specify the specific format a device is localized. For example, a Japanese (JIS) keyboard should declare the [HIDDeviceLocalizationCode.japan](../../hiddevicelocalizationcode/japan.md) localization code.
