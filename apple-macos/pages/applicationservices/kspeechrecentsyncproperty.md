> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechrecentsyncproperty](https://developer.apple.com/documentation/applicationservices/kspeechrecentsyncproperty)

# kSpeechRecentSyncProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get the message code for the most recently encountered synchronization command.

## Declaration

```swift
let kSpeechRecentSyncProperty: CFString
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the most recently encountered synchronization command. This property works with the [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md) function.

# kSpeechRecentSyncProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Get the message code for the most recently encountered synchronization command.

## Declaration

```objectivec
const CFStringRef kSpeechRecentSyncProperty;
```

<a id="discussion"></a>

## Discussion

The value associated with this property is a `CFNumber` object that specifies the most recently encountered synchronization command. This property works with the [CopySpeechProperty](1459075-copyspeechproperty.md) function.
