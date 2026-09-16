> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/submitlabel(_:)

# submitLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the submit label for this view.

## Declaration

```swift
nonisolated func submitLabel(_ submitLabel: SubmitLabel) -> some View

```

## Parameters

- `submitLabel`: One of the cases specified in [SubmitLabel](../submitlabel.md).

<a id="discussion"></a>

## Discussion

```swift
Form {
    TextField("Username", $viewModel.username)
        .submitLabel(.continue)
    SecureField("Password", $viewModel.password)
        .submitLabel(.done)
}
```

## See Also

### Labeling a submission event

- [SubmitLabel](../submitlabel.md): A semantic label describing the label of submission within a view hierarchy.
