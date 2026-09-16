> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mainactor/run(resulttype:body:)

# run(resultType:body:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Execute the given body closure on the main actor.

## Declaration

```swift
static func run<T>(resultType: T.Type = T.self, body: @MainActor @Sendable () throws -> T) async rethrows -> T where T : Sendable
```
