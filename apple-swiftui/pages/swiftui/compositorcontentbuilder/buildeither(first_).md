> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontentbuilder/buildeither(first:)](https://developer.apple.com/documentation/swiftui/compositorcontentbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Produces content for a conditional statement in a multi-statement closure when the condition is true.

## Declaration

```swift
@export(implementation) static func buildEither<F>(first: _ConditionalContent<_LimitedAvailabilityCompositorContent, _LimitedAvailabilityCompositorContent>) -> _ConditionalContent<_LimitedAvailabilityCompositorContent, F> where F : CompositorContent
```

<a id="discussion"></a>

## Discussion

Conditional statements in a [CompositorContentBuilder](../compositorcontentbuilder.md) must contain both an `if` statement and an `else` statement, and the condition can only perform a compiler check for availability, like in the following code:

```swift
var body: some CompositorContent {
    if #available(visionOS 100, *) {
        MyNewContent()
    } else {
        MyOldContent()
    }
}
```
