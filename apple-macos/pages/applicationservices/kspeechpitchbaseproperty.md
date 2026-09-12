> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechpitchbaseproperty](https://developer.apple.com/documentation/applicationservices/kspeechpitchbaseproperty)

# kSpeechPitchBaseProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s baseline speech pitch.

## Declaration

```swift
let kSpeechPitchBaseProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s baseline speech pitch. 

Typical voice frequencies range from around 90 hertz for a low-pitched male voice to perhaps 300 hertz for a high-pitched child’s voice. These frequencies correspond to approximate pitch values in the ranges of 30.000 to 40.000 and 55.000 to 65.000, respectively.

This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) and [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) functions.

> **Note**

> The change in speech pitch may not be noticeable until the next sentence or paragraph is spoken.

# kSpeechPitchBaseProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get or set the speech channel’s baseline speech pitch.

## Declaration

```objectivec
const CFStringRef kSpeechPitchBaseProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the speech channel’s baseline speech pitch. 

Typical voice frequencies range from around 90 hertz for a low-pitched male voice to perhaps 300 hertz for a high-pitched child’s voice. These frequencies correspond to approximate pitch values in the ranges of 30.000 to 40.000 and 55.000 to 65.000, respectively.

This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) and [SetSpeechProperty](1459256-setspeechproperty.md) functions.

> **Note**

> The change in speech pitch may not be noticeable until the next sentence or paragraph is spoken.
