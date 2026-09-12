> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputcontext/ishardwarekeyboardinputexpected](https://developer.apple.com/documentation/uikit/uitextinputcontext/ishardwarekeyboardinputexpected)

# isHardwareKeyboardInputExpected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.

## Declaration

```swift
var isHardwareKeyboardInputExpected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When hardware keyboard input is likely, adjust your UI or perform any actions you need to accommodate that input.

## See Also

### Getting the expected input type

- [isDictationInputExpected](isdictationinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.
- [isPencilInputExpected](ispencilinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.

# hardwareKeyboardInputExpected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isHardwareKeyboardInputExpected) BOOL hardwareKeyboardInputExpected;
```

<a id="Discussion"></a>

## Discussion

When hardware keyboard input is likely, adjust your UI or perform any actions you need to accommodate that input.

## See Also

### Getting the expected input type

- [dictationInputExpected](isdictationinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.
- [pencilInputExpected](ispencilinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.
