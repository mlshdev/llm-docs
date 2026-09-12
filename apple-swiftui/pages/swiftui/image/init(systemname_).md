> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(systemname:)](https://developer.apple.com/documentation/swiftui/image/init(systemname:))

# init(systemName:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a system symbol image.

## Declaration

```swift
init(systemName: String)
```

## Parameters

- `systemName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images.

<a id="discussion"></a>

## Discussion

This initializer creates an image using a system-provided symbol. Use [SF Symbols](https://developer.apple.com/design/resources/#sf-symbols) to find symbols and their corresponding names.

To create a custom symbol image from your app’s asset catalog, use [init(\_:bundle:)](init%28__bundle_%29.md) instead.

## See Also

### Creating a system symbol image

- [init(systemName:variableValue:)](init%28systemname_variablevalue_%29.md): Creates a system symbol image with a variable value.
