> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/permissionbutton/init(question:label:)-8291n

# init(question:label:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Creates a button that requests permission from parents or guardians to continue using your app after a significant update.

## Declaration

```swift
@MainActor @preconcurrency init(question: PermissionQuestion<Topic>, @ViewBuilder label: @escaping () -> Label) where Topic == SignificantAppUpdateTopic
```

## Parameters

- `question`: The permission question that describes the significant app update.
- `label`: The view to display inside the button.

## See Also

### Creating buttons

- [init(question:label:)](init%28question_label_%29-25jfa.md): Creates a button that requests permission from parents or guardians.
