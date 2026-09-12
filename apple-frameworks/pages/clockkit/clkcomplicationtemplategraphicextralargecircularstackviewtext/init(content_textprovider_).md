> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackviewtext/init(content:textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackviewtext/init(content:textprovider:))

# init(content:textProvider:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has a view and a small amount of text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(content: Content, textProvider: CLKTextProvider)
```

## Parameters

- `content`: The SwiftUI view displayed by the template.
- `textProvider`: The text provider for the text below the view. The template supports multicolored text.
