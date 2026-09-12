> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kspeechrefconproperty](https://developer.apple.com/documentation/applicationservices/kspeechrefconproperty)

# kSpeechRefConProperty (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set a speech channel’s reference constant value.

## Declaration

```swift
let kSpeechRefConProperty: CFString
```

<a id="discussion"></a>

## Discussion

The reference constant value is passed to application-defined callback functions and might contain any value convenient for the application. The value associated with this property is a `CFNumber` object that contains an integer value. For example, an application might set the value of the `CFNumber` object to an address in memory that contains a reference to an object or a pointer to a function.

This property works with the [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md) function.

# kSpeechRefConProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Set a speech channel’s reference constant value.

## Declaration

```objectivec
const CFStringRef kSpeechRefConProperty;
```

<a id="discussion"></a>

## Discussion

The reference constant value is passed to application-defined callback functions and might contain any value convenient for the application. The value associated with this property is a `CFNumber` object that contains an integer value. For example, an application might set the value of the `CFNumber` object to an address in memory that contains a reference to an object or a pointer to a function.

This property works with the [SetSpeechProperty](1459256-setspeechproperty.md) function.
