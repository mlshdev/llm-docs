> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/languagetag/init(rawvalue:)](https://developer.apple.com/documentation/packagedescription/languagetag/init(rawvalue:))

# init(rawValue:)

**Framework:** PackageDescription  
**Kind:** Initializer

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: String)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

<a id="discussion"></a>

## Discussion

If there is no value of the type that corresponds with the specified raw value, this initializer returns `nil`.

## See Also

### Creating a Language Tag

- [init(extendedGraphemeClusterLiteral:)](init%28extendedgraphemeclusterliteral_%29.md): Creates an instance initialized to the given value.
- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates an instance initialized to the given value.
- [init(unicodeScalarLiteral:)](init%28unicodescalarliteral_%29.md): Creates an instance initialized to the given value.
