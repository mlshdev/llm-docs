> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isscrollenabled](https://developer.apple.com/documentation/swiftui/environmentvalues/isscrollenabled)

# isScrollEnabled

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether any scroll views associated with this environment allow scrolling to occur.

## Declaration

```swift
var isScrollEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `true`. Use the [scrollDisabled(\_:)](../view/scrolldisabled%28__%29.md) modifier to configure this property.

## See Also

### Disabling scrolling

- [scrollDisabled(\_:)](../view/scrolldisabled%28__%29.md): Disables or enables scrolling in scrollable views.
