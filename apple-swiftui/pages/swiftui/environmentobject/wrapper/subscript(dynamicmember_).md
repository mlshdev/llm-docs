> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentobject/wrapper/subscript(dynamicmember:)

# subscript(dynamicMember:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a binding to the resulting value of a given key path.

## Declaration

```swift
@MainActor @preconcurrency subscript<Subject>(dynamicMember keyPath: ReferenceWritableKeyPath<ObjectType, Subject>) -> Binding<Subject> { get }
```

## Parameters

- `keyPath`: A key path to a specific resulting value.

<a id="return-value"></a>

## Return Value

A new binding.
