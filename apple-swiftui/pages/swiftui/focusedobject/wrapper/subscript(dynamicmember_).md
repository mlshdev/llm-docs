> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/focusedobject/wrapper/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a binding to the value of a given key path.

## Declaration

```swift
@MainActor @preconcurrency subscript<T>(dynamicMember keyPath: ReferenceWritableKeyPath<ObjectType, T>) -> Binding<T> { get }
```

## Parameters

- `keyPath`: A key path to a specific value on the wrapped object.

<a id="return-value"></a>

## Return Value

A new binding.
