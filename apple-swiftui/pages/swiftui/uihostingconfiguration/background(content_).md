> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uihostingconfiguration/background(content:)

# background(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the background contents for the hosting configuration’s enclosing cell.

## Declaration

```swift
func background<B>(@ContentBuilder content: () -> B) -> UIHostingConfiguration<Content, B> where B : View
```

## Parameters

- `content`: The contents of the SwiftUI hierarchy to be shown inside the background of the cell.

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
