> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontentbuilder](https://developer.apple.com/documentation/swiftui/tabcontentbuilder)

# TabContentBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.

## Declaration

```swift
@resultBuilder struct TabContentBuilder<TabValue> where TabValue : Hashable
```

## Topics

### Structures

- [TabContentBuilder.Content](tabcontentbuilder/content.md): A view representation of the content of a builder-based tab view with selection.

### Type Methods

- [buildBlock(\_:)](tabcontentbuilder/buildblock%28__%29.md)
- [buildBlock(\_:\_:)](tabcontentbuilder/buildblock%28____%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:)](tabcontentbuilder/buildblock%28______%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28__________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28____________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28______________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28________________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28__________________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](tabcontentbuilder/buildblock%28____________________%29.md): Conforms when `TabValue` conforms to `Hashable`.
- [buildEither(first:)](tabcontentbuilder/buildeither%28first_%29.md)
- [buildEither(second:)](tabcontentbuilder/buildeither%28second_%29.md)
- [buildExpression(\_:)](tabcontentbuilder/buildexpression%28__%29.md)
- [buildIf(\_:)](tabcontentbuilder/buildif%28__%29.md)
- [buildLimitedAvailability(\_:)](tabcontentbuilder/buildlimitedavailability%28__%29.md)

## See Also

### Configuring a tab

- [sectionActions(content:)](view/sectionactions%28content_%29.md): Adds custom actions to a section.
- [TabPlacement](tabplacement.md): A place that a tab can appear.
- [TabContent](tabcontent.md): A type that provides content for programmatically selectable tabs in a tab view.
- [AnyTabContent](anytabcontent.md): Type erased tab content.
