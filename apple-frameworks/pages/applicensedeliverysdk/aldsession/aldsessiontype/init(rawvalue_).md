> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldsession/aldsessiontype/init(rawvalue:)](https://developer.apple.com/documentation/applicensedeliverysdk/aldsession/aldsessiontype/init(rawvalue:))

# init(rawValue:)

**Framework:** App License Delivery SDK  
**Kind:** Initializer

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: UInt32)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

<a id="discussion"></a>

## Discussion

If there is no value of the type that corresponds with the specified raw value, this initializer returns `nil`. For example:

```
enum PaperSize: String {
    case A4, A5, Letter, Legal
}

print(PaperSize(rawValue: "Legal"))
// Prints "Optional("PaperSize.Legal")"

print(PaperSize(rawValue: "Tabloid"))
// Prints "nil"
```
