> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/rawvalue-swift.property](https://developer.apple.com/documentation/swift/rawrepresentable/rawvalue-swift.property)

# rawValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The corresponding value of the raw type.

## Declaration

```swift
var rawValue: Self.RawValue { get }
```

<a id="discussion"></a>

## Discussion

A new instance initialized with `rawValue` will be equivalent to this instance. For example:

```swift
enum PaperSize: String {
    case A4, A5, Letter, Legal
}

let selectedSize = PaperSize.Letter
print(selectedSize.rawValue)
// Prints "Letter"

print(selectedSize == PaperSize(rawValue: selectedSize.rawValue)!)
// Prints "true"
```

## See Also

### Accessing the Raw Value

- [RawValue](rawvalue-swift.associatedtype.md): The raw type that can be used to represent all values of the conforming type.
