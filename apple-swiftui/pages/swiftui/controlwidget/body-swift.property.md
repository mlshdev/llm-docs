> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/controlwidget/body-swift.property

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

The content and behavior of the control.

## Declaration

```swift
@ControlWidgetConfigurationBuilder @MainActor @preconcurrency var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

For any controls that you create, provide a computed `body` property that defines the control using some control widget configuration.

Swift infers the control’s [Body](body-swift.associatedtype.md) associated type based on the contents of the `body` property.
