> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputcontext/ispencilinputexpected](https://developer.apple.com/documentation/uikit/uitextinputcontext/ispencilinputexpected)

# isPencilInputExpected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.

## Declaration

```swift
var isPencilInputExpected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When pencil input is likely, adjust your UI or perform any actions you need to accommodate that input. For example, you might adjust the size of UI elements to optimize them for handwriting input.

## See Also

### Getting the expected input type

- [isDictationInputExpected](isdictationinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.
- [isHardwareKeyboardInputExpected](ishardwarekeyboardinputexpected.md): Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.

# pencilInputExpected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether someone is likely to use Apple Pencil for input.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isPencilInputExpected) BOOL pencilInputExpected;
```

<a id="Discussion"></a>

## Discussion

When pencil input is likely, adjust your UI or perform any actions you need to accommodate that input. For example, you might adjust the size of UI elements to optimize them for handwriting input.

## See Also

### Getting the expected input type

- [dictationInputExpected](isdictationinputexpected.md): Returns a Boolean value that indicates whether someone is likely to use dictation to input text to the app.
- [hardwareKeyboardInputExpected](ishardwarekeyboardinputexpected.md): Returns a Boolean value that indicates whether someone is likely to enter text using a hardware keyboard.
