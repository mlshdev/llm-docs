> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/swiftlanguagemodes](https://developer.apple.com/documentation/packagedescription/package/swiftlanguagemodes)

# swiftLanguageModes

**Framework:** PackageDescription  
**Kind:** Instance Property

The list of Swift language modes with which this package is compatible.

## Declaration

```swift
final var swiftLanguageModes: [SwiftLanguageMode]?
```

## See Also

### Declaring Supported Languages

- [SwiftLanguageMode](../swiftlanguagemode.md): The Swift language mode used to compile Swift sources in the package
- [CLanguageStandard](../clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [CXXLanguageStandard](../cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [cLanguageStandard](clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [SwiftVersion](../swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
