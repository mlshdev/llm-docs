> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/observedobject/init(initialvalue:)

# init(initialValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an observed object with an initial value.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency init(initialValue: ObjectType)
```

## Parameters

- `initialValue`: An initial value.

<a id="discussion"></a>

## Discussion

This initializer has the same behavior as the [init(wrappedValue:)](init%28wrappedvalue_%29.md) initializer. See that initializer for more information.

## See Also

### Creating an observed object

- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Creates an observed object with an initial wrapped value.
