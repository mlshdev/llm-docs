> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/editmode/transient](https://developer.apple.com/documentation/swiftui/editmode/transient)

# EditMode.transient

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

The view is in a temporary edit mode.

## Declaration

```swift
case transient
```

<a id="discussion"></a>

## Discussion

The use of this state varies by platform and for different controls. As an example, SwiftUI might engage temporary edit mode over the duration of a swipe gesture.

The [isEditing](isediting.md) property is `true` in this state.

## See Also

### Getting edit modes

- [EditMode.active](active.md): The user can edit the view content.
- [EditMode.inactive](inactive.md): The user can’t edit the view content.
