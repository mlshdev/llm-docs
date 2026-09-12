> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundle/body-swift.associatedtype](https://developer.apple.com/documentation/swiftui/widgetbundle/body-swift.associatedtype)

# Body

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The type of widget that represents the content of the bundle.

## Declaration

```swift
associatedtype Body : Widget
```

<a id="discussion"></a>

## Discussion

When you support more than one widget, Swift infers this type from your implementation of the required [body](body-swift.property.md) property.

## See Also

### Implementing a widget bundle

- [body](body-swift.property.md): Declares the group of widgets that an app supports.
- [WidgetBundleBuilder](../widgetbundlebuilder.md): A custom attribute that constructs a widget bundle’s body.
