> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/init(_:)](https://developer.apple.com/documentation/swiftui/font/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a custom font from a platform font instance.

## Declaration

```swift
init(_ font: CTFont)
```

<a id="discussion"></a>

## Discussion

Initializing [Font](../font.md) with platform font instance (doc://com.apple.documentation/documentation/CoreText/CTFont-q6r) can bridge SwiftUI [Font](../font.md) with [NSFont](https://developer.apple.com/documentation/appkit/nsfont) or [UIFont](https://developer.apple.com/documentation/uikit/uifont), both of which are toll-free bridged to doc://com.apple.documentation/documentation/CoreText/CTFont-q6r. For example:

```swift
// Use native Core Text API to create desired ctFont.
let ctFont = CTFontCreateUIFontForLanguage(.system, 12, nil)!

// Create SwiftUI Text with the CTFont instance.
let text = Text("Hello").font(Font(ctFont))
```
