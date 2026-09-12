> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarrole/editor](https://developer.apple.com/documentation/swiftui/toolbarrole/editor)

# editor

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The editor role.

## Declaration

```swift
static var editor: ToolbarRole { get }
```

<a id="discussion"></a>

## Discussion

Use this role for a toolbar that primarily displays controls geared towards editing document-like content. In iPadOS, this will leading align the navigation title, allow for toolbar items to occupy the center of the navigation bar, and provide a custom appearance for any back button present in the toolbar.

## See Also

### Behavior-specific roles

- [browser](browser.md): The browser role.
- [navigationStack](navigationstack.md): The navigationStack role.
