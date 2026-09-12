> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/assistiveaccess](https://developer.apple.com/documentation/swiftui/assistiveaccess)

# AssistiveAccess

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A scene that presents an interface appropriate for Assistive Access on iOS and iPadOS. On other platforms, this scene is unused.

## Declaration

```swift
nonisolated struct AssistiveAccess<Content> where Content : View
```

## Topics

### Initializers

- [init(content:)](assistiveaccess/init%28content_%29.md): Creates an Assistive Access scene.

## Relationships

### Conforms To

- [Scene](scene.md)

## See Also

### Using assistive access

- [accessibilityAssistiveAccessEnabled](environmentvalues/accessibilityassistiveaccessenabled.md): A Boolean value that indicates whether Assistive Access is in use.
- [assistiveAccessNavigationIcon(\_:)](view/assistiveaccessnavigationicon%28__%29.md): Configures the view’s icon for purposes of navigation.
- [assistiveAccessNavigationIcon(systemImage:)](view/assistiveaccessnavigationicon%28systemimage_%29.md): Configures the view’s icon for purposes of navigation.
