> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsemojikeyboard](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsemojikeyboard)

# allowsEmojiKeyboard (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the emoji keyboard during an assessment.

## Declaration

```swift
var allowsEmojiKeyboard: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Users can access the emoji keyboard by tapping the emoji button on the keyboard (iOS) or through the Edit menu and keyboard shortcuts (macOS). An assessment session disables access to the emoji keyboard by default, but you can allow it by setting [allowsEmojiKeyboard](allowsemojikeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsEmojiKeyboard (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the emoji keyboard during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsEmojiKeyboard;
```

<a id="discussion"></a>

## Discussion

Users can access the emoji keyboard by tapping the emoji button on the keyboard (iOS) or through the Edit menu and keyboard shortcuts (macOS). An assessment session disables access to the emoji keyboard by default, but you can allow it by setting [allowsEmojiKeyboard](allowsemojikeyboard.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
