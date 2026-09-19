> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/communicationlimitsbutton/init(question:label:)

# init(question:label:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a new instance.

## Declaration

```swift
@MainActor @preconcurrency init(question: PermissionQuestion<CommunicationTopic>, @ViewBuilder label: @escaping () -> Label)
```

## Parameters

- `question`: The question to ask the person about their communication limits.
- `label`: The view to display as content.

## See Also

### Creating a view

- [body](body.md): Deprecated. The body of the view.
- [question](question.md): Deprecated. The question to ask a parent or guardian about making an exception to their child’s communication limits.
