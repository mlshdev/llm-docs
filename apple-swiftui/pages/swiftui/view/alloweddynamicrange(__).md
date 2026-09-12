> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/alloweddynamicrange(_:)](https://developer.apple.com/documentation/swiftui/view/alloweddynamicrange(_:))

# allowedDynamicRange(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new view configured with the specified allowed dynamic range.

## Declaration

```swift
@export(implementation) nonisolated func allowedDynamicRange(_ range: Image.DynamicRange?) -> some View

```

## Parameters

- `range`: The requested dynamic range, or nil to restore the default allowed range.

<a id="return-value"></a>

## Return Value

A new view.

<a id="discussion"></a>

## Discussion

The following example enables HDR rendering within a view hierarchy:

```swift
MyView().allowedDynamicRange(.high)
```

## See Also

### Colors and patterns

- [backgroundStyle(\_:)](backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
