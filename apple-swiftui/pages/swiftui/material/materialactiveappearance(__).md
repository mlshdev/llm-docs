> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/material/materialactiveappearance(_:)](https://developer.apple.com/documentation/swiftui/material/materialactiveappearance(_:))

# materialActiveAppearance(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets an explicit active appearance for this material.

## Declaration

```swift
func materialActiveAppearance(_ appearance: MaterialActiveAppearance) -> Material
```

<a id="discussion"></a>

## Discussion

Materials used as the `window` container background on macOS will automatically appear inactive when their the window appears inactive, but can be made to always appear active by setting the active appearance behavior to be always active:

```swift
Text("Hello, World!")
    .containerBackground(
        Material.regular.materialActiveAppearance(.active),
        for: .window)
```
