> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/update()](https://developer.apple.com/documentation/swiftui/fetchrequest/update())

# update()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Updates the fetched results.

## Declaration

```swift
@MainActor @preconcurrency mutating func update()
```

<a id="discussion"></a>

## Discussion

SwiftUI calls this function before rendering a view’s [body](../view/body-8kl5o.md) to ensure the view has the most recent fetched results.

## See Also

### Getting the fetched results

- [wrappedValue](wrappedvalue.md): The fetched results of the fetch request.
