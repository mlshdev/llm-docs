> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeecherrorcount](https://developer.apple.com/documentation/applicationservices/kspeecherrorcount)

# kSpeechErrorCount (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The number of errors that have occurred in processing the current text string, since the last call to the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function with the `kSpeechErrorsProperty` property.

## Declaration

```swift
let kSpeechErrorCount: CFString
```

<a id="discussion"></a>

## Discussion

Using the `kSpeechErrorOldest` keys and the `kSpeechErrorNewest` keys, you can get information about the oldest and most recent errors that occurred since the last call to [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md), but you cannot get information about any intervening errors.

# kSpeechErrorCount (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The number of errors that have occurred in processing the current text string, since the last call to the [CopySpeechProperty](1459075-copyspeechproperty.md) function with the `kSpeechErrorsProperty` property.

## Declaration

```objectivec
const CFStringRef kSpeechErrorCount;
```

<a id="discussion"></a>

## Discussion

Using the `kSpeechErrorOldest` keys and the `kSpeechErrorNewest` keys, you can get information about the oldest and most recent errors that occurred since the last call to [CopySpeechProperty](1459075-copyspeechproperty.md), but you cannot get information about any intervening errors.
