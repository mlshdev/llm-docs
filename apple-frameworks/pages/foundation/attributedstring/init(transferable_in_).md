> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/init(transferable:in:)](https://developer.apple.com/documentation/foundation/attributedstring/init(transferable:in:))

# init(transferable:in:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Extract an attributed string from SwiftUI’s transferable representation in a certain environment.

## Declaration

```swift
init(transferable: AttributedTextFormatting.Transferable, in environment: EnvironmentValues) throws
```

<a id="discussion"></a>

## Discussion

Use this initializer with a `AttributedTextFormatting/Transferable` that was imported, e.g. in the `action` closure of the `View/dropDestination(for:action:isTargeted)` modifier.

> **Note**

> This initializer applies the `AttributedTextFormattingDefinition` in the given `environment` to the imported text before returning.

> **See Also**

> `View/attributedTextFormattingDefinition(_:)-uc57`, `AttributedTextValueConstraint/constrain(_:)-6cp64`
