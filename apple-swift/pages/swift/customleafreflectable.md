> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/customleafreflectable](https://developer.apple.com/documentation/swift/customleafreflectable)

# CustomLeafReflectable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that explicitly supplies its own mirror, but whose descendant classes are not represented in the mirror unless they also override `customMirror`.

## Declaration

```swift
protocol CustomLeafReflectable : CustomReflectable
```

## Relationships

### Inherits From

- [CustomReflectable](customreflectable.md)

## See Also

### Customizing Your Type’s Reflection

- [CustomReflectable](customreflectable.md): A type that explicitly supplies its own mirror.
- [CustomPlaygroundDisplayConvertible](customplaygrounddisplayconvertible.md): A type that supplies a custom description for playground logging.
- [PlaygroundQuickLook](playgroundquicklook.md): Deprecated. The sum of types that can be used as a Quick Look representation.
- [DebugDescription()](debugdescription%28%29.md): Converts description definitions to a debugger Type Summary.
