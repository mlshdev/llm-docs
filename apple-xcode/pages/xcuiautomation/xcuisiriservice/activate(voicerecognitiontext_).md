> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuisiriservice/activate(voicerecognitiontext:)](https://developer.apple.com/documentation/xcuiautomation/xcuisiriservice/activate(voicerecognitiontext:))

# activate(voiceRecognitionText:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · Xcode 16.3+

Presents the Siri UI, if it’s not currently active, and accepts a string that is then processed as if it’s recognized speech.

## Declaration

```swift
func activate(voiceRecognitionText text: String)
```

## Parameters

- `text`: The string to pass to Siri for processing.

# activateWithVoiceRecognitionText: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · Xcode 16.3+

Presents the Siri UI, if it’s not currently active, and accepts a string that is then processed as if it’s recognized speech.

## Declaration

```objectivec
- (void) activateWithVoiceRecognitionText:(NSString *) text;
```

## Parameters

- `text`: The string to pass to Siri for processing.
