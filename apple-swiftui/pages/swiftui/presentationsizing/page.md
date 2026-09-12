> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationsizing/page](https://developer.apple.com/documentation/swiftui/presentationsizing/page)

# page

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The size is roughly the size of a page of paper, appropriate for informational or compositional content.

## Declaration

```swift
static var page: PagePresentationSizing { get }
```

## See Also

### Getting built-in presentation size

- [automatic](automatic.md): Conforms when `Self` is `AutomaticPresentationSizing`. The default presentation sizing, appropriate for the platform.
- [fitted](fitted.md): Conforms when `Self` is `FittedPresentationSizing`. The presentation sizing is dictated by the ideal size of the content
- [form](form.md): Conforms when `Self` is `FormPresentationSizing`. The size is appropriate for forms and slightly less wide than`.page`
