> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/displaymessageaction/callasfunction(_:)](https://developer.apple.com/documentation/storekit/displaymessageaction/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells StoreKit to display the App Store message, if appropriate.

## Declaration

```swift
@MainActor func callAsFunction(_ message: Message) throws
```

## Parameters

- `message`: The App Store message to display.

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [DisplayMessageAction](../displaymessageaction.md) structure using `message` as an argument.

For information about how Swift uses the [callAsFunction()](../requestreviewaction/callasfunction%28%29.md) method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
