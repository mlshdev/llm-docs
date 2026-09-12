> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftlanguagemode](https://developer.apple.com/documentation/packagedescription/swiftlanguagemode)

# SwiftLanguageMode

**Framework:** PackageDescription  
**Kind:** Enumeration

The Swift language mode used to compile Swift sources in the package

## Declaration

```swift
enum SwiftLanguageMode
```

## Topics

### Swift Language Modes

- [SwiftLanguageMode.v6](swiftlanguagemode/v6.md): The identifier for the Swift 6 language version.
- [SwiftLanguageMode.v5](swiftlanguagemode/v5.md): The identifier for the Swift 5 language version.
- [SwiftLanguageMode.v4_2](swiftlanguagemode/v4_2.md): The identifier for the Swift 4.2 language version.
- [SwiftLanguageMode.v4](swiftlanguagemode/v4.md): The identifier for the Swift 4 language version.
- [SwiftLanguageMode.version(\_:)](swiftlanguagemode/version%28__%29.md): A user-defined value for the Swift version.
- [SwiftLanguageMode.v3](swiftlanguagemode/v3.md): Deprecated. The identifier for the Swift 3 language version.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [CustomStringConvertible](../swift/customstringconvertible.md)
- [Escapable](../swift/escapable.md)

## See Also

### Declaring Supported Languages

- [CLanguageStandard](clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [CXXLanguageStandard](cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [swiftLanguageModes](package/swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](package/clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](package/cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [SwiftVersion](swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](package/swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
