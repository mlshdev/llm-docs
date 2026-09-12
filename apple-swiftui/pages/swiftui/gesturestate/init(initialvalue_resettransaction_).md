> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesturestate/init(initialvalue:resettransaction:)](https://developer.apple.com/documentation/swiftui/gesturestate/init(initialvalue:resettransaction:))

# init(initialValue:resetTransaction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a view state that’s derived from a gesture with an initial state value and a transaction to reset it.

## Declaration

```swift
@export(implementation) init(initialValue: Value, resetTransaction: Transaction)
```

## Parameters

- `initialValue`: An initial state value.
- `resetTransaction`: A transaction that provides metadata for view updates.

## See Also

### Creating a gesture state

- [init(initialValue:)](init%28initialvalue_%29.md): Creates a view state that’s derived from a gesture with an initial value.
- [init(initialValue:reset:)](init%28initialvalue_reset_%29.md): Creates a view state that’s derived from a gesture with an initial state value and a closure that provides a transaction to reset it.
- [init(reset:)](init%28reset_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a view state that’s derived from a gesture with a closure that provides a transaction to reset it.
- [init(resetTransaction:)](init%28resettransaction_%29.md): Conforms when `Value` conforms to `ExpressibleByNilLiteral`. Creates a view state that’s derived from a gesture with a transaction to reset it.
- [init(wrappedValue:)](init%28wrappedvalue_%29.md): Creates a view state that’s derived from a gesture.
- [init(wrappedValue:reset:)](init%28wrappedvalue_reset_%29.md): Creates a view state that’s derived from a gesture with a wrapped state value and a closure that provides a transaction to reset it.
- [init(wrappedValue:resetTransaction:)](init%28wrappedvalue_resettransaction_%29.md): Creates a view state that’s derived from a gesture with a wrapped state value and a transaction to reset it.
