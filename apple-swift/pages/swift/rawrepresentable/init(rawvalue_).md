> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/init(rawvalue:)](https://developer.apple.com/documentation/swift/rawrepresentable/init(rawvalue:))

# init(rawValue:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: Self.RawValue)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

<a id="discussion"></a>

## Discussion

If there is no value of the type that corresponds with the specified raw value, this initializer returns `nil`. For example:

```swift
enum PaperSize: String {
    case A4, A5, Letter, Legal
}

print(PaperSize(rawValue: "Legal"))
// Prints "Optional(PaperSize.Legal)"

print(PaperSize(rawValue: "Tabloid"))
// Prints "nil"
```
