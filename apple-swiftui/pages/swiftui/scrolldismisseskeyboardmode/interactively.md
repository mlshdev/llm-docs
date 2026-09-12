> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolldismisseskeyboardmode/interactively](https://developer.apple.com/documentation/swiftui/scrolldismisseskeyboardmode/interactively)

# interactively

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · watchOS 9.0+

Enable people to interactively dismiss the keyboard as part of the scroll operation.

## Declaration

```swift
static var interactively: ScrollDismissesKeyboardMode { get }
```

<a id="discussion"></a>

## Discussion

The software keyboard’s position tracks the gesture that drives the scroll operation if the gesture crosses into the keyboard’s area of the display. People can dismiss the keyboard by scrolling it off the display, or reverse the direction of the scroll to cancel the dismissal.

## See Also

### Getting modes

- [automatic](automatic.md): Determine the mode automatically based on the surrounding context.
- [immediately](immediately.md): Dismiss the keyboard as soon as scrolling starts.
- [never](never.md): Never dismiss the keyboard automatically as a result of scrolling.
