> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/swiftversion](https://developer.apple.com/documentation/packagedescription/swiftversion)

# SwiftVersion

**Framework:** PackageDescription  
**Kind:** Type Alias  
**Availability:** SwiftPM  (deprecated in 6.0)

Type alias to previous name for backward source compatibility

## Declaration

```swift
typealias SwiftVersion = SwiftLanguageMode
```

## See Also

### Declaring Supported Languages

- [SwiftLanguageMode](swiftlanguagemode.md): The Swift language mode used to compile Swift sources in the package
- [CLanguageStandard](clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [CXXLanguageStandard](cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [swiftLanguageModes](package/swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](package/clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](package/cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [swiftLanguageVersions](package/swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
