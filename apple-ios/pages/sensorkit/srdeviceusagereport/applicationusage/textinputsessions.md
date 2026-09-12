> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/applicationusage/textinputsessions](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage/textinputsessions)

# textInputSessions (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The text input session types that occur during application usage.

## Declaration

```swift
var textInputSessions: [SRTextInputSession] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the text and input sources the framework records as the user enters text in an app. A text-input session starts when the user raises a keyboard and ends when the keyboard dismisses. However, the framework combines a text-input session that contains fewer than 20 words with the subsequent text-input sessions until reaching a 20-word minimum. The framework separates input modes ([inputModes](../../srkeyboardmetrics/inputmodes.md)) such that one input mode doesn’t combine with a text-input session of another mode (such as Spanish-Mexico).

## See Also

### Inspecting Text Input

- [SRTextInputSession](../../srtextinputsession.md): The characters a user types for a particular keyboard.

# textInputSessions (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The text input session types that occur during application usage.

## Declaration

```objectivec
@property (copy, readonly) NSArray<SRTextInputSession *> * textInputSessions;
```

<a id="Discussion"></a>

## Discussion

This property contains the text and input sources the framework records as the user enters text in an app. A text-input session starts when the user raises a keyboard and ends when the keyboard dismisses. However, the framework combines a text-input session that contains fewer than 20 words with the subsequent text-input sessions until reaching a 20-word minimum. The framework separates input modes ([inputModes](../../srkeyboardmetrics/inputmodes.md)) such that one input mode doesn’t combine with a text-input session of another mode (such as Spanish-Mexico).

## See Also

### Inspecting Text Input

- [SRTextInputSession](../../srtextinputsession.md): The characters a user types for a particular keyboard.
