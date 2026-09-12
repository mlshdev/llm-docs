> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkusernotificationhostingcontroller/isinteractive](https://developer.apple.com/documentation/swiftui/wkusernotificationhostingcontroller/isinteractive)

# isInteractive

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 7.0+

If the notification should accept user input.

## Declaration

```swift
@MainActor @preconcurrency class var isInteractive: Bool { get }
```

<a id="discussion"></a>

## Discussion

Default value is `false`

## See Also

### Configuring the notification

- [coalescedDescriptionFormat](coalesceddescriptionformat.md): The format string to display when multiple notifications of the same type arrive simultaneously. If you specify a custom string, you can use the %d variable to reflect the number of notifications. If `nil` format will be the system default.
- [sashColor](sashcolor.md): Color to use within the sash of the long look interface. If `nil` the sash will be the default system color.
- [subtitleColor](subtitlecolor.md): The color to apply to the subtitle text displayed in the short look interface. If `nil` the text will be the default system color.
- [titleColor](titlecolor.md): The color to apply to the text displayed in the sash. If `nil` the text will be the default system color.
- [wantsSashBlur](wantssashblur.md): If the sash should include a blur over the background.
