> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpreferences/sirilanguagecode()](https://developer.apple.com/documentation/intents/inpreferences/sirilanguagecode())

# siriLanguageCode() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Returns the language that Siri uses to communicate with the user.

## Declaration

```swift
class func siriLanguageCode() -> String
```

<a id="return-value"></a>

## Return Value

The locale ID that identifies the language and any optional region or script information. Examples of locale IDs are “en”, “en_GB”, “zh-Hans”, and “zh-Hans_HK”. For more information about the structure of locale IDs, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

<a id="Discussion"></a>

## Discussion

This property is for informational purposes only. Siri’s input language can be different than the language displayed on the user’s device. However, your app and Intents extension should always specify content using the user’s preferred language, as indicated by the language settings of the current device.

# siriLanguageCode (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Returns the language that Siri uses to communicate with the user.

## Declaration

```objectivec
+ (NSString *) siriLanguageCode;
```

<a id="return-value"></a>

## Return Value

The locale ID that identifies the language and any optional region or script information. Examples of locale IDs are “en”, “en_GB”, “zh-Hans”, and “zh-Hans_HK”. For more information about the structure of locale IDs, see [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i).

<a id="Discussion"></a>

## Discussion

This property is for informational purposes only. Siri’s input language can be different than the language displayed on the user’s device. However, your app and Intents extension should always specify content using the user’s preferred language, as indicated by the language settings of the current device.
