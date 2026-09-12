> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/unicodescalarview/first](https://developer.apple.com/documentation/swift/substring/unicodescalarview/first)

# first

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The first element of the collection.

## Declaration

```swift
var first: Self.Element? { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, the value of this property is `nil`.

```swift
let numbers = [10, 20, 30, 40, 50]
if let firstNumber = numbers.first {
    print(firstNumber)
}
// Prints "10"
```
