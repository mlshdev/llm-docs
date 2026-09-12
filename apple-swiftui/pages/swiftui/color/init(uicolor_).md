> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/init(uicolor:)](https://developer.apple.com/documentation/swiftui/color/init(uicolor:))

# init(uiColor:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a color from a UIKit color.

## Declaration

```swift
init(uiColor: UIColor)
```

<a id="discussion"></a>

## Discussion

Use this method to create a SwiftUI color from a [UIColor](https://developer.apple.com/documentation/uikit/uicolor) instance. The new color preserves the adaptability of the original. For example, you can create a rectangle using [link](https://developer.apple.com/documentation/uikit/uicolor/link) to see how the shade adjusts to match the user’s system settings:

```swift
struct Box: View {
    var body: some View {
        Color(uiColor: .link)
            .frame(width: 200, height: 100)
    }
}
```

The `Box` view defined above automatically changes its appearance when the user turns on Dark Mode. With the light and dark appearances placed side by side, you can see the subtle difference in shades:

![A side by side comparison of light and dark appearance screenshots of](https://developer.apple.com/images/com.apple.SwiftUI/Color-init-3@2x.png)

> **Note**

> Use this initializer only if you need to convert an existing [UIColor](https://developer.apple.com/documentation/uikit/uicolor) to a SwiftUI color. Otherwise, create a SwiftUI [Color](../color.md) using an initializer like [init(\_:red:green:blue:opacity:)](init%28__red_green_blue_opacity_%29.md), or use a system color like [blue](../shapestyle/blue.md).

## See Also

### Creating a color from another color

- [init(nsColor:)](init%28nscolor_%29.md): Creates a color from an AppKit color.
- [init(cgColor:)](init%28cgcolor_%29.md): Creates a color from a Core Graphics color.
