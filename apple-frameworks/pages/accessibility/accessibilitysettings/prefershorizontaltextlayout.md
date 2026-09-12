> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/prefershorizontaltextlayout](https://developer.apple.com/documentation/accessibility/accessibilitysettings/prefershorizontaltextlayout)

# prefersHorizontalTextLayout

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout is on.

## Declaration

```swift
static var prefersHorizontalTextLayout: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the system setting for Prefer Horizontal Text is on; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Customizing vertical text layout

- [Horizontal text](../horizontal-text.md): Lay out vertical text horizontally in your app when people turn on the Prefer Horizontal Text setting.
- [prefersHorizontalTextLayoutDidChangeNotification](prefershorizontaltextlayoutdidchangenotification.md): A notification that posts when the system setting to prefer horizontal text for languages that support both vertical and horizontal text layout changes.
