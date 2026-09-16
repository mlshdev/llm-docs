> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/editmode/inactive

# EditMode.inactive

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

The user can’t edit the view content.

## Declaration

```swift
case inactive
```

<a id="discussion"></a>

## Discussion

The [isEditing](isediting.md) property is `false` in this state.

## See Also

### Getting edit modes

- [EditMode.active](active.md): The user can edit the view content.
- [EditMode.transient](transient.md): The view is in a temporary edit mode.
