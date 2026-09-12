> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/taskpriority/rawvalue-swift.property](https://developer.apple.com/documentation/swift/taskpriority/rawvalue-swift.property)

# rawValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The corresponding value of the raw type.

## Declaration

```swift
var rawValue: UInt8
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
