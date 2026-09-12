> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openurlaction/result/handled](https://developer.apple.com/documentation/swiftui/openurlaction/result/handled)

# handled

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The handler opened the URL.

## Declaration

```swift
static let handled: OpenURLAction.Result
```

<a id="discussion"></a>

## Discussion

The action invokes its completion handler with `true` when your handler returns this value.

## See Also

### Getting the results

- [discarded](discarded.md): The handler discarded the URL.
- [systemAction](systemaction.md): The handler asks the system to open the original URL.
- [systemAction(\_:)](systemaction%28__%29.md): The handler asks the system to open the modified URL.
