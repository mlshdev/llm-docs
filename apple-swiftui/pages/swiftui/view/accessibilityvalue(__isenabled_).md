> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityvalue(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/accessibilityvalue(_:isenabled:))

# accessibilityValue(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a textual description of the value that the view contains.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityValue(_ valueResource: LocalizedStringResource, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `valueResource`: The accessibility value to apply.
- `isEnabled`: If true the accessibility value is applied; otherwise the accessibility value is unchanged.

<a id="discussion"></a>

## Discussion

Use this method to describe the value represented by a view, but only if that’s different than the view’s label. For example, for a slider that you label as “Volume” using accessibilityLabel(), you can provide the current volume setting, like “60%”, using accessibilityValue().

## See Also

### Describing values

- [accessibilityValue(\_:)](accessibilityvalue%28__%29.md): Adds a textual description of the value that the view contains.
