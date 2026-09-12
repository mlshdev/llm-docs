> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselectionaffinity/downstream](https://developer.apple.com/documentation/swiftui/textselectionaffinity/downstream)

# TextSelectionAffinity.downstream

**Framework:** SwiftUI  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An downstream selection affinity. In this case, the cursor is associated with the character immediately after it.

## Declaration

```swift
case downstream
```

<a id="discussion"></a>

## Discussion

In the context of our example `hello|مرحبا`, with a downstream affinity, the cursor would be associated with the first character of “مرحبا”. If you were to type in Arabic, the characters would be added before the “م” in “مرحبا”, since Arabic is written right-to-left.
