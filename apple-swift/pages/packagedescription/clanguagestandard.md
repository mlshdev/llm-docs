> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/clanguagestandard](https://developer.apple.com/documentation/packagedescription/clanguagestandard)

# CLanguageStandard

**Framework:** PackageDescription  
**Kind:** Enumeration

The supported C language standard you use to compile C sources in the package.

## Declaration

```swift
enum CLanguageStandard
```

## Topics

### Enumeration Cases

- [CLanguageStandard.c11](clanguagestandard/c11.md): The identifier for the ISO C 2011 language standard.
- [CLanguageStandard.c17](clanguagestandard/c17.md): The identifier for the ISO C 2017 language stadard.
- [CLanguageStandard.c18](clanguagestandard/c18.md): The identifier for the ISO C 2017 language standard.
- [CLanguageStandard.c2x](clanguagestandard/c2x.md): The identifier for the ISO C2x draft language standard.
- [CLanguageStandard.c89](clanguagestandard/c89.md): The identifier for the ISO C 1989 language standard.
- [CLanguageStandard.c90](clanguagestandard/c90.md): The identifier for the ISO C 1990 language standard.
- [CLanguageStandard.c99](clanguagestandard/c99.md): The identifier for the ISO C 1999 language standard.
- [CLanguageStandard.gnu11](clanguagestandard/gnu11.md): The identifier for the ISO C 2011 language standard with GNU extensions.
- [CLanguageStandard.gnu17](clanguagestandard/gnu17.md): The identifier for the ISO C 2017 language standard with GNU extensions.
- [CLanguageStandard.gnu18](clanguagestandard/gnu18.md): The identifier for the ISO C 2017 language standard with GNU extensions.
- [CLanguageStandard.gnu2x](clanguagestandard/gnu2x.md): The identifier for the ISO C2x draft language standard with GNU extensions.
- [CLanguageStandard.gnu89](clanguagestandard/gnu89.md): The identifier for the ISO C 1990 language standard with GNU extensions.
- [CLanguageStandard.gnu90](clanguagestandard/gnu90.md): The identifier for the ISO C 1990 language standard with GNU extensions.
- [CLanguageStandard.gnu99](clanguagestandard/gnu99.md): The identifier for the ISO C 1999 language standard with GNU extensions.
- [CLanguageStandard.iso9899_1990](clanguagestandard/iso9899_1990.md): The identifier for the ISO C 1990 language standard.
- [CLanguageStandard.iso9899_199409](clanguagestandard/iso9899_199409.md): The identifier for the ISO C 1990 language standard with amendment 1.
- [CLanguageStandard.iso9899_1999](clanguagestandard/iso9899_1999.md): The identifier for the ISO C 1999 language standard.
- [CLanguageStandard.iso9899_2011](clanguagestandard/iso9899_2011.md): The identifier for the ISO C 2011 language standard.
- [CLanguageStandard.iso9899_2017](clanguagestandard/iso9899_2017.md): The identifier for the ISO C 2017 language standard.
- [CLanguageStandard.iso9899_2018](clanguagestandard/iso9899_2018.md): The identifier for the ISO C 2017 language standard.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [Hashable](../swift/hashable.md)
- [RawRepresentable](../swift/rawrepresentable.md)

## See Also

### Declaring Supported Languages

- [SwiftLanguageMode](swiftlanguagemode.md): The Swift language mode used to compile Swift sources in the package
- [CXXLanguageStandard](cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [swiftLanguageModes](package/swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](package/clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](package/cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [SwiftVersion](swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](package/swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
