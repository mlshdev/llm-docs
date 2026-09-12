> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mainactor/run(resulttype:body:)](https://developer.apple.com/documentation/swift/mainactor/run(resulttype:body:))

# run(resultType:body:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Execute the given body closure on the main actor.

## Declaration

```swift
static func run<T>(resultType: T.Type = T.self, body: @MainActor @Sendable () throws -> T) async rethrows -> T where T : Sendable
```
