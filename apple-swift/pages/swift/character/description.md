> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/description](https://developer.apple.com/documentation/swift/character/description)

# description

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A textual representation of this instance.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

Calling this property directly is discouraged. Instead, convert an instance of any type to a string by using the `String(describing:)` initializer. This initializer works with any type, and uses the custom `description` property for types that conform to `CustomStringConvertible`:

```swift
struct Point: CustomStringConvertible {
    let x: Int, y: Int

    var description: String {
        return "(\(x), \(y))"
    }
}

let p = Point(x: 21, y: 30)
let s = String(describing: p)
print(s)
// Prints "(21, 30)"
```

The conversion of `p` to a string in the assignment to `s` uses the `Point` type’s `description` property.

## See Also

### Describing a Character

- [debugDescription](debugdescription.md): A textual representation of the character, suitable for debugging.
- [customMirror](custommirror.md): A mirror that reflects the `Character` instance.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Character` instance.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
