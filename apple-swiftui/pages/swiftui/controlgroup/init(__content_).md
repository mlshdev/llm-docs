> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroup/init(_:content:)](https://developer.apple.com/documentation/swiftui/controlgroup/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new control group with the specified content that generates its label from a string.

## Declaration

```swift
@export(implementation) nonisolated init<C, S>(_ title: S, @ContentBuilder content: () -> C) where Content == LabeledControlGroupContent<C, Text>, C : View, S : StringProtocol
```

## Parameters

- `title`: A string that describes the contents of the group.

## See Also

### Creating a control group

- [init(content:)](init%28content_%29.md): Creates a new ControlGroup with the specified children
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content and a label.
