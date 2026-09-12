> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitychildbehavior/ignore](https://developer.apple.com/documentation/swiftui/accessibilitychildbehavior/ignore)

# ignore

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Any child accessibility elements become hidden.

## Declaration

```swift
static let ignore: AccessibilityChildBehavior
```

<a id="discussion"></a>

## Discussion

Use this behavior when you want a view represented by a single accessibility element. The new accessibility element has no initial properties. So you will need to use other accessibility modifiers, such as [accessibilityLabel(\_:)](../view/accessibilitylabel%28__%29.md), to begin making it accessible.

```swift
var body: some View {
    VStack {
        Button("Previous Page", action: goBack)
        Text("\(pageNumber)")
        Button("Next Page", action: goForward)
    }
    .accessibilityElement(children: .ignore)
    .accessibilityValue("Page \(pageNumber) of \(pages.count)")
    .accessibilityAdjustableAction { action in
        if action == .increment {
            goForward()
        } else {
            goBack()
        }
    }
}
```

Before using the  [ignore](ignore.md)behavior, consider using the [combine](combine.md) behavior.

> **Note**

> A new accessibility element is always created.

## See Also

### Getting behaviors

- [combine](combine.md): Any child accessibility element’s properties are merged into the new accessibility element.
- [contain](contain.md): Any child accessibility elements become children of the new accessibility element.
