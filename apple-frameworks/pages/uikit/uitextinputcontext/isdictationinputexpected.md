> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputcontext/isdictationinputexpected](https://developer.apple.com/documentation/uikit/uitextinputcontext/isdictationinputexpected)

# isDictationInputExpected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.

## Declaration

```swift
var isDictationInputExpected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When dictation input is likely, adjust your UI or perform any actions you need to accommodate dictation input.

## See Also

### Getting the expected input type

- [isHardwareKeyboardInputExpected](ishardwarekeyboardinputexpected.md): Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.
- [isPencilInputExpected](ispencilinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.

# dictationInputExpected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isDictationInputExpected) BOOL dictationInputExpected;
```

<a id="Discussion"></a>

## Discussion

When dictation input is likely, adjust your UI or perform any actions you need to accommodate dictation input.

## See Also

### Getting the expected input type

- [hardwareKeyboardInputExpected](ishardwarekeyboardinputexpected.md): Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.
- [pencilInputExpected](ispencilinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.
