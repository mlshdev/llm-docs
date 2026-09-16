> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/binding/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a binding by projecting the base value to a hashable value.

## Declaration

```swift
init<V>(_ base: Binding<V>) where Value == AnyHashable, V : Hashable
```

## Parameters

- `base`: A `Hashable` value to project to an `AnyHashable` value.

## See Also

### Creating a binding

- [init(projectedValue:)](init%28projectedvalue_%29.md): Creates a binding from the value of another binding.
- [init(get:set:)](init%28get_set_%29.md): Creates a binding with closures that read and write the binding value.
- [constant(\_:)](constant%28__%29.md): Creates a binding with an immutable value.
