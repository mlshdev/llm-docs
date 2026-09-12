> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/devicematchingcriteria/localizationcode](https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/localizationcode)

# localizationCode

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A localization code that specifies the HID compliant localization code.

## Declaration

```swift
var localizationCode: HIDDeviceLocalizationCode?
```

<a id="discussion"></a>

## Discussion

The localization code can specify for which specific format the device is localized. For example, a Japanese (JIS) keyboard declares the [HIDDeviceLocalizationCode.japan](../../hiddevicelocalizationcode/japan.md) localization code.
