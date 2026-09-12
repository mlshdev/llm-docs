> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenestorage/init(_:)](https://developer.apple.com/documentation/swiftui/scenestorage/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a property that can save and restore an Optional boolean.

## Declaration

```swift
init(_ key: String) where Value == Bool?
```

## Parameters

- `key`: A key used to save and restore the value.

<a id="discussion"></a>

## Discussion

Defaults to nil if there is no restored value

## See Also

### Storing a value

- [init(wrappedValue:\_:)](init%28wrappedvalue___%29.md): Creates a property that can save and restore an integer, transforming it to a `RawRepresentable` data type.
