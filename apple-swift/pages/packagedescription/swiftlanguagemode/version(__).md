> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftlanguagemode/version(_:)](https://developer.apple.com/documentation/packagedescription/swiftlanguagemode/version(_:))

# SwiftLanguageMode.version(\_:)

**Framework:** PackageDescription  
**Kind:** Case

A user-defined value for the Swift version.

## Declaration

```swift
case version(String)
```

<a id="discussion"></a>

## Discussion

The value is passed as-is to the Swift compiler’s `-swift-version` flag.

## See Also

### Swift Language Modes

- [SwiftLanguageMode.v6](v6.md): The identifier for the Swift 6 language version.
- [SwiftLanguageMode.v5](v5.md): The identifier for the Swift 5 language version.
- [SwiftLanguageMode.v4_2](v4_2.md): The identifier for the Swift 4.2 language version.
- [SwiftLanguageMode.v4](v4.md): The identifier for the Swift 4 language version.
- [SwiftLanguageMode.v3](v3.md): Deprecated. The identifier for the Swift 3 language version.
