> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glass/clear](https://developer.apple.com/documentation/swiftui/glass/clear)

# clear

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

The clear variant of glass.

## Declaration

```swift
static var clear: Glass { get }
```

<a id="discussion"></a>

## Discussion

When using clear glass, ensure content remains legible by adding a dimming layer or other treatment beneath the glass.

For example, you could add a transparent black color beneath your glass to ensure content remains legible above the glass.

```swift
Label("Flag", systemImage: "flag.fill")
    .padding()
    .glassEffect(.clear)
    .background(.black.opacity(0.3))
```
