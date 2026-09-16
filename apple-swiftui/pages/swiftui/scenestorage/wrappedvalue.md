> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scenestorage/wrappedvalue

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The underlying value referenced by the state variable.

## Declaration

```swift
var wrappedValue: Value { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

This works identically to `State.wrappedValue`.

> **See Also**

> State.wrappedValue

## See Also

### Getting the value

- [projectedValue](projectedvalue.md): A binding to the state value.
