> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/requestreviewaction/callasfunction()](https://developer.apple.com/documentation/storekit/requestreviewaction/callasfunction())

# callAsFunction()

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Tells StoreKit to ask the user to rate or review your app, if appropriate.

## Declaration

```swift
@MainActor func callAsFunction()
```

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [RequestReviewAction](../requestreviewaction.md) instance that you get from the [requestReview](https://developer.apple.com/documentation/swiftui/environmentvalues/requestreview) environment value.

For information about how Swift uses the [callAsFunction()](callasfunction%28%29.md)method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID622) in *The Swift Programming Language*.
