> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechresetproperty](https://developer.apple.com/documentation/applicationservices/kspeechresetproperty)

# kSpeechResetProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set a speech channel back to its default state.

## Declaration

```swift
let kSpeechResetProperty: CFString
```

<a id="discussion"></a>

## Discussion

You can use this function to, for example, set speech pitch and speech rate to default values. There is no value associated with this property; to reset the channel to its default state, set the string to `NULL`.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechResetProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set a speech channel back to its default state.

## Declaration

```objectivec
const CFStringRef kSpeechResetProperty;
```

<a id="discussion"></a>

## Discussion

You can use this function to, for example, set speech pitch and speech rate to default values. There is no value associated with this property; to reset the channel to its default state, set the string to `NULL`.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
