> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/binding/animation(_:)

# animation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies an animation to perform when the binding value changes.

## Declaration

```swift
func animation(_ animation: Animation? = .default) -> Binding<Value>
```

## Parameters

- `animation`: An animation sequence performed when the binding value changes.

<a id="return-value"></a>

## Return Value

A new binding.

## See Also

### Managing changes

- [id](id.md): Conforms when `Value` conforms to `Identifiable`. The stable identity of the entity associated with this instance, corresponding to the `id` of the binding’s wrapped value.
- [transaction(\_:)](transaction%28__%29.md): Specifies a transaction for the binding.
- [transaction](transaction.md): The binding’s transaction.
