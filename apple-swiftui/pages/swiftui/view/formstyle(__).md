> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/formstyle(_:)

# formStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the style for forms in a view hierarchy.

## Declaration

```swift
nonisolated func formStyle<S>(_ style: S) -> some View where S : FormStyle

```

## Parameters

- `style`: The form style to set.

<a id="return-value"></a>

## Return Value

A view that uses the specified form style for itself and its child views.

## See Also

### Grouping inputs

- [Form](../form.md): A container for grouping controls used for data entry, such as in settings or inspectors.
- [LabeledContent](../labeledcontent.md): A container for attaching a label to a value-bearing view.
- [labeledContentStyle(\_:)](labeledcontentstyle%28__%29.md): Sets a style for labeled content.
