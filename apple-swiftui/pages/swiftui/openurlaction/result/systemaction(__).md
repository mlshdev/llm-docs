> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openurlaction/result/systemaction(_:)](https://developer.apple.com/documentation/swiftui/openurlaction/result/systemaction(_:))

# systemAction(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The handler asks the system to open the modified URL.

## Declaration

```swift
static func systemAction(_ url: URL) -> OpenURLAction.Result
```

## Parameters

- `url`: The URL that the handler asks the system to open.

<a id="discussion"></a>

## Discussion

The action invokes its completion handler with a value that depends on the outcome of the system’s attempt to open the URL.

## See Also

### Getting the results

- [discarded](discarded.md): The handler discarded the URL.
- [handled](handled.md): The handler opened the URL.
- [systemAction](systemaction.md): The handler asks the system to open the original URL.
