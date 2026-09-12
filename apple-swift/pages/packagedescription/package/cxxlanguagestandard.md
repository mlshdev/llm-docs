> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/cxxlanguagestandard](https://developer.apple.com/documentation/packagedescription/package/cxxlanguagestandard)

# cxxLanguageStandard

**Framework:** PackageDescription  
**Kind:** Instance Property

The C++ language standard to use for all C++ targets in this package.

## Declaration

```swift
final var cxxLanguageStandard: CXXLanguageStandard?
```

## See Also

### Declaring Supported Languages

- [SwiftLanguageMode](../swiftlanguagemode.md): The Swift language mode used to compile Swift sources in the package
- [CLanguageStandard](../clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [CXXLanguageStandard](../cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [swiftLanguageModes](swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](clanguagestandard.md): The C language standard to use for all C targets in this package.
- [SwiftVersion](../swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
