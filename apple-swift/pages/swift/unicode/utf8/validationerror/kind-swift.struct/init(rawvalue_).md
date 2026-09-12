> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/validationerror/kind-swift.struct/init(rawvalue:)](https://developer.apple.com/documentation/swift/unicode/utf8/validationerror/kind-swift.struct/init(rawvalue:))

# init(rawValue:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: UInt8)
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
