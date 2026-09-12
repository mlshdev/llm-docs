> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/init(arrayliteral:)-85a3x](https://developer.apple.com/documentation/swift/set/init(arrayliteral:)-85a3x)

# init(arrayLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a set containing the elements of the given array literal.

## Declaration

```swift
init(arrayLiteral: Self.Element...)
```

## Parameters

- `arrayLiteral`: A list of elements of the new set.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It is used by the compiler when you use an array literal. Instead, create a new set using an array literal as its value by enclosing a comma-separated list of values in square brackets. You can use an array literal anywhere a set is expected by the type context.

Here, a set of strings is created from an array literal holding only strings:

```swift
let ingredients: Set = ["cocoa beans", "sugar", "cocoa butter", "salt"]
if ingredients.isSuperset(of: ["sugar", "salt"]) {
    print("Whatever it is, it's bound to be delicious!")
}
// Prints "Whatever it is, it's bound to be delicious!"
```
