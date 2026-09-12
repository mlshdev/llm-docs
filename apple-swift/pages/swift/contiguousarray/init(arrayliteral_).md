> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray/init(arrayliteral:)](https://developer.apple.com/documentation/swift/contiguousarray/init(arrayliteral:))

# init(arrayLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an array from the given array literal.

## Declaration

```swift
init(arrayLiteral elements: Element...)
```

## Parameters

- `elements`: A variadic list of elements of the new array.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It is used by the compiler when you use an array literal. Instead, create a new array by using an array literal as its value. To do this, enclose a comma-separated list of values in square brackets.

Here, an array of strings is created from an array literal holding only strings:

```swift
let ingredients: ContiguousArray =
      ["cocoa beans", "sugar", "cocoa butter", "salt"]
```
