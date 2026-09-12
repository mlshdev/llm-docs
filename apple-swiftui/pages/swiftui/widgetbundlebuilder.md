> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundlebuilder](https://developer.apple.com/documentation/swiftui/widgetbundlebuilder)

# WidgetBundleBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A custom attribute that constructs a widget bundle’s body.

## Declaration

```swift
@resultBuilder struct WidgetBundleBuilder
```

<a id="overview"></a>

## Overview

Use the `@WidgetBundleBuilder` attribute to group multiple widgets listed in the [body](widgetbundle/body-swift.property.md) property of a widget bundle. For example, the following code defines a widget bundle that consists of two widgets.

```swift
@main
struct GameWidgets: WidgetBundle {
   @WidgetBundleBuilder
   var body: some Widget {
       GameStatusWidget()
       CharacterDetailWidget()
   }
}
```

## Topics

### Bundling widgets

- [buildBlock()](widgetbundlebuilder/buildblock%28%29.md): Builds an empty Widget from a block containing no statements, `{ }`.
- [buildBlock(\_:)](widgetbundlebuilder/buildblock%28__%29.md)
- [buildExpression(\_:)](widgetbundlebuilder/buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](widgetbundlebuilder/buildlimitedavailability%28__%29.md): Builds an availability check within the builder
- [buildOptional(\_:)](widgetbundlebuilder/buildoptional%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## See Also

### Implementing a widget bundle

- [body](widgetbundle/body-swift.property.md): Declares the group of widgets that an app supports.
- [Body](widgetbundle/body-swift.associatedtype.md): The type of widget that represents the content of the bundle.
