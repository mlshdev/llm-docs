> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/slidertickbuilder/buildeither(second:)](https://developer.apple.com/documentation/swiftui/slidertickbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Produces content for a conditional statement in a multi-statement closure when the condition is false.

## Declaration

```swift
@export(implementation) static func buildEither<T, F>(second: F) -> _ConditionalContent<T, F> where V == T.Value, T : SliderTickContent, F : SliderTickContent, T.Body == F.Body
```
