> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessibility/accessibilitysettings/prefershorizontaltextlayoutdidchangenotification

# prefersHorizontalTextLayoutDidChangeNotification

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A notification that posts when the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout changes.

## Declaration

```swift
static var prefersHorizontalTextLayoutDidChangeNotification: Notification.Name { get }
```

## See Also

### Customizing vertical text layout

- [Horizontal text](../horizontal-text.md): Lay out vertical text horizontally in your app when people turn on the Prefer Horizontal Text setting.
- [prefersHorizontalTextLayout](prefershorizontaltextlayout.md): A Boolean value that indicates whether the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout is on.
