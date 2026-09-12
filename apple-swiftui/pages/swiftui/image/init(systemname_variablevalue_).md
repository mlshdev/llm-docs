> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(systemname:variablevalue:)](https://developer.apple.com/documentation/swiftui/image/init(systemname:variablevalue:))

# init(systemName:variableValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a system symbol image with a variable value.

## Declaration

```swift
init(systemName: String, variableValue: Double?)
```

## Parameters

- `systemName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images.
- `variableValue`: An optional value between `0.0` and `1.0` that the rendered image can use to customize its appearance, if specified. If the symbol doesn’t support variable values, this parameter has no effect. Use the SF Symbols app to look up which symbols support variable values.

<a id="discussion"></a>

## Discussion

This initializer creates an image using a system-provided symbol. The rendered symbol may alter its appearance to represent the value provided in `variableValue`. Use [SF Symbols](https://developer.apple.com/design/resources/#sf-symbols) (version 4.0 or later) to find system symbols that support variable values and their corresponding names.

The following example shows the effect of creating the `"chart.bar.fill"` symbol with different values.

```swift
HStack{
    Image(systemName: "chart.bar.fill", variableValue: 0.3)
    Image(systemName: "chart.bar.fill", variableValue: 0.6)
    Image(systemName: "chart.bar.fill", variableValue: 1.0)
}
.font(.system(.largeTitle))
```

![Three instances of the bar chart symbol, arranged horizontally.](https://developer.apple.com/images/com.apple.SwiftUI/Image-3@2x.png)

To create a custom symbol image from your app’s asset catalog, use [init(\_:variableValue:bundle:)](init%28__variablevalue_bundle_%29.md) instead.

## See Also

### Creating a system symbol image

- [init(systemName:)](init%28systemname_%29.md): Creates a system symbol image.
