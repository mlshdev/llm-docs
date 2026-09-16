> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/inlinearray/init(initializingwith:)

# init(initializingWith:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init<E>(initializingWith initializer: @_lifetime(0: copy 0) (inout OutputSpan<Element>) throws(E) -> Void) throws(E) where E : Error
```
