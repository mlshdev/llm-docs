> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingconfiguration/minsize(width:height:)](https://developer.apple.com/documentation/swiftui/uihostingconfiguration/minsize(width:height:))

# minSize(width:height:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the minimum size for the configuration.

## Declaration

```swift
func minSize(width: CGFloat? = nil, height: CGFloat? = nil) -> UIHostingConfiguration<Content, Background>
```

## Parameters

- `width`: The value to use for the width dimension. A value of `nil` indicates that the system default should be used.
- `height`: The value to use for the height dimension. A value of `nil` indicates that the system default should be used.

<a id="discussion"></a>

## Discussion

Use this modifier to indicate that a configuration’s associated cell can be resized to a specific minimum. The following example allows the cell to be compressed to zero size:

```swift
UIHostingConfiguration {
    Text("My Contents")
}
.minSize(width: 0, height: 0)
```

## See Also

### Setting a size

- [minSize()](minsize%28%29.md): Deprecated. Sets the minimum size for the configuration.
