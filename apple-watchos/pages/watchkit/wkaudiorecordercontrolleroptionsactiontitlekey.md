> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiorecordercontrolleroptionsactiontitlekey](https://developer.apple.com/documentation/watchkit/wkaudiorecordercontrolleroptionsactiontitlekey)

# WKAudioRecorderControllerOptionsActionTitleKey (Swift)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+

The title to display on the button that the user taps to accept a recording. The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. If you do not specify this option, the button title is set to “Save”.

## Declaration

```swift
let WKAudioRecorderControllerOptionsActionTitleKey: String
```

## See Also

### Constants

- [WKAudioRecorderControllerOptionsAlwaysShowActionTitleKey](wkaudiorecordercontrolleroptionsalwaysshowactiontitlekey.md): The behavior for showing the action button. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface always shows the action button. When the value is [false](https://developer.apple.com/documentation/swift/false), the sheet shows the button only after the user has recorded some audio. The default value for this option is YES.
- [WKAudioRecorderControllerOptionsAutorecordKey](wkaudiorecordercontrolleroptionsautorecordkey.md): The automatic recording behavior of the action sheet. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface starts recording as soon as it is presented. When the value is [false](https://developer.apple.com/documentation/swift/false), the user must start recording manually. The default value for this option is [true](https://developer.apple.com/documentation/swift/true).
- [WKAudioRecorderControllerOptionsMaximumDurationKey](wkaudiorecordercontrolleroptionsmaximumdurationkey.md): The maximum length of recorded audio clips. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with an [TimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value containing the maximum duration in seconds. If you do not specify this option, there is no maximum recording time.

# WKAudioRecorderControllerOptionsActionTitleKey (Objective-C)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+

The title to display on the button that the user taps to accept a recording. The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. If you do not specify this option, the button title is set to “Save”.

## Declaration

```objectivec
extern NSString * const WKAudioRecorderControllerOptionsActionTitleKey;
```

## See Also

### Constants

- [WKAudioRecorderControllerOptionsAlwaysShowActionTitleKey](wkaudiorecordercontrolleroptionsalwaysshowactiontitlekey.md): The behavior for showing the action button. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface always shows the action button. When the value is [false](https://developer.apple.com/documentation/swift/false), the sheet shows the button only after the user has recorded some audio. The default value for this option is YES.
- [WKAudioRecorderControllerOptionsAutorecordKey](wkaudiorecordercontrolleroptionsautorecordkey.md): The automatic recording behavior of the action sheet. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface starts recording as soon as it is presented. When the value is [false](https://developer.apple.com/documentation/swift/false), the user must start recording manually. The default value for this option is [true](https://developer.apple.com/documentation/swift/true).
- [WKAudioRecorderControllerOptionsMaximumDurationKey](wkaudiorecordercontrolleroptionsmaximumdurationkey.md): The maximum length of recorded audio clips. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with an [NSTimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value containing the maximum duration in seconds. If you do not specify this option, there is no maximum recording time.
