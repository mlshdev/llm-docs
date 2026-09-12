> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fillshapestyle/init()](https://developer.apple.com/documentation/swiftui/fillshapestyle/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An overlay fill style for filling shapes.

## Declaration

```swift
@export(implementation) init()
```

<a id="discussion"></a>

## Discussion

This shape style is appropriate for items situated on top of an existing background color. It incorporates transparency to allow the background color to show through.

Use the primary version of this style to fill thin or small shapes, such as the track of a slider. Use the secondary version of this style to fill medium-size shapes, such as the background of a switch. Use the tertiary version of this style to fill large shapes, such as input fields, search bars, or buttons. Use the quaternary version of this style to fill large areas that contain complex content, such as an expanded table cell.
