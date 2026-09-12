> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowplacement/init(x:y:width:height:)](https://developer.apple.com/documentation/swiftui/windowplacement/init(x:y:width:height:))

# init(x:y:width:height:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a new window placement with an optional position and size.

## Declaration

```swift
init(x: CGFloat? = nil, y: CGFloat? = nil, width: CGFloat? = nil, height: CGFloat? = nil)
```

<a id="discussion"></a>

## Discussion

Any values not provided will use use the default values for the `Scene` that this placement is being applied to.
