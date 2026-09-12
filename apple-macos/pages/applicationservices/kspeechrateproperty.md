> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechrateproperty](https://developer.apple.com/documentation/applicationservices/kspeechrateproperty)

# kSpeechRateProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set a speech channel’s speech rate.

## Declaration

```swift
let kSpeechRateProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s speaking rate. 

The range of supported rates is not predefined by the Speech Synthesis Manager; each speech synthesizer provides its own range of speech rates. Average human speech occurs at a rate of 180 to 220 words per minute.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) and [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) functions.

# kSpeechRateProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set a speech channel’s speech rate.

## Declaration

```objectivec
const CFStringRef kSpeechRateProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s speaking rate. 

The range of supported rates is not predefined by the Speech Synthesis Manager; each speech synthesizer provides its own range of speech rates. Average human speech occurs at a rate of 180 to 220 words per minute.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) and [SetSpeechProperty](1459256-setspeechproperty.md) functions.
