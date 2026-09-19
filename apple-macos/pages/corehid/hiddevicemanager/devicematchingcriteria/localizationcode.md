> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/localizationcode

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
