> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/foregroundcolor(_:)](https://developer.apple.com/documentation/swiftui/text/foregroundcolor(_:))

# foregroundColor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets the color of the text displayed by this view.

> Use [foregroundStyle(\_:)](foregroundstyle%28__%29.md) instead.

## Declaration

```swift
nonisolated func foregroundColor(_ color: Color?) -> Text
```

## Parameters

- `color`: The color to use when displaying this text.

<a id="return-value"></a>

## Return Value

A text view that uses the color value you supply.

<a id="discussion"></a>

## Discussion

Use this method to change the color of the text rendered by a text view.

For example, you can display the names of the colors red, green, and blue in their respective colors:

```swift
HStack {
    Text("Red").foregroundColor(.red)
    Text("Green").foregroundColor(.green)
    Text("Blue").foregroundColor(.blue)
}
```

![Three text views arranged horizontally, each containing](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-foregroundColor@2x.png)
