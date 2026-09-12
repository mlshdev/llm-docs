> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardverificationrequest/userinterfacelanguage](https://developer.apple.com/documentation/proximityreader/paymentcardverificationrequest/userinterfacelanguage)

# userInterfaceLanguage

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The language to use when localizing the user interface.

## Declaration

```swift
var userInterfaceLanguage: Locale.Language?
```

<a id="discussion"></a>

## Discussion

Setting this attribute only affects customer facing elements, screen elements, or audio targeted at the merchant (device owner) remains set to the language defined in the system settings. When you set this option to `nil`, the framework uses the person’s preferred language defined in System Settings.
