> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingconfiguration/background(content:)](https://developer.apple.com/documentation/swiftui/uihostingconfiguration/background(content:))

# background(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the background contents for the hosting configuration’s enclosing cell.

## Declaration

```swift
func background<B>(@ContentBuilder content: () -> B) -> UIHostingConfiguration<Content, B> where B : View
```

<a id="discussion"></a>

## Discussion

The following example sets a custom view to the background of the cell:

```swift
UIHostingConfiguration {
    Text("My Contents")
}
.background {
    MyBackgroundView()
}
```

## See Also

### Setting the background

- [background(\_:)](background%28__%29.md): Sets the background contents for the hosting configuration’s enclosing cell.
