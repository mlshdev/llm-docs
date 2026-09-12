> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollindicatorvisibility/visible](https://developer.apple.com/documentation/swiftui/scrollindicatorvisibility/visible)

# visible

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Show the scroll indicators.

## Declaration

```swift
static var visible: ScrollIndicatorVisibility { get }
```

<a id="discussion"></a>

## Discussion

The actual visibility of the indicators depends on platform conventions like auto-hiding behaviors in iOS or user preference behaviors in macOS.

## See Also

### Getting visibilties

- [automatic](automatic.md): Scroll indicator visibility depends on the policies of the component accepting the visibility configuration.
- [hidden](hidden.md): Hide the scroll indicators.
- [never](never.md): Scroll indicators should never be visible.
