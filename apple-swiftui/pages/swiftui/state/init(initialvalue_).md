> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/state/init(initialvalue:)](https://developer.apple.com/documentation/swiftui/state/init(initialvalue:))

# init(initialValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a state property that stores an initial value.

## Declaration

```swift
@export(implementation) init(initialValue value: Value)
```

## Parameters

- `value`: An initial value to store in the state property.

<a id="discussion"></a>

## Discussion

This initializer has the same behavior as the [init(wrappedValue:)](init%28wrappedvalue_%29.md) initializer. See that initializer for more information.

## See Also

### Creating a state

- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Creates a state property that stores an initial wrapped value.
- [init()](init%28%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a state property without an initial value.
