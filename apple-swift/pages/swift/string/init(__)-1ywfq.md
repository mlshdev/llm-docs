> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(_:)-1ywfq](https://developer.apple.com/documentation/swift/string/init(_:)-1ywfq)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance from the description of a given `LosslessStringConvertible` instance.

## Declaration

```swift
init<T>(_ value: T) where T : LosslessStringConvertible
```

## See Also

### Converting Other Types to Strings

- [init(describing:)](init%28describing_%29-588wb.md): Creates a string representing the given value.
- [init(describing:)](init%28describing_%29-hsqw.md): Creates a string representing the given value.
- [init(describing:)](init%28describing_%29-6ttci.md): Creates a string representing the given value.
- [init(describing:)](init%28describing_%29-67ncf.md): Creates a string representing the given value.
- [init(reflecting:)](init%28reflecting_%29.md): Creates a string with a detailed representation of the given value, suitable for debugging.
