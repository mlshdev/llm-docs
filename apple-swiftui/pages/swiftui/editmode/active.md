> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/editmode/active

# EditMode.active

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

The user can edit the view content.

## Declaration

```swift
case active
```

<a id="discussion"></a>

## Discussion

The [isEditing](isediting.md) property is `true` in this state.

## See Also

### Getting edit modes

- [EditMode.inactive](inactive.md): The user can’t edit the view content.
- [EditMode.transient](transient.md): The view is in a temporary edit mode.
