> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/cxxlanguagestandard](https://developer.apple.com/documentation/packagedescription/cxxlanguagestandard)

# CXXLanguageStandard

**Framework:** PackageDescription  
**Kind:** Enumeration

The supported C++ language standard you use to compile C++ sources in the package.

## Declaration

```swift
enum CXXLanguageStandard
```

<a id="overview"></a>

## Overview

Aliases are available for some C++ language standards. For example, use `cxx98` or `cxx03` for the “ISO C++ 1998 with amendments” standard. To learn more, see [C++ Support in Clang](https://clang.llvm.org/cxx_status.html).

## Topics

### Enumeration Cases

- [CXXLanguageStandard.cxx03](cxxlanguagestandard/cxx03.md): The identifier for the ISO C++ 1998 language standard with amendments.
- [CXXLanguageStandard.cxx11](cxxlanguagestandard/cxx11.md): The identifier for the ISO C++ 2011 language standard with amendments.
- [CXXLanguageStandard.cxx14](cxxlanguagestandard/cxx14.md): The identifier for the ISO C++ 2014 language standard with amendments.
- [CXXLanguageStandard.cxx1z](cxxlanguagestandard/cxx1z.md): Deprecated. The identifier for the ISO C++ 2017 language standard with amendments.
- [CXXLanguageStandard.cxx98](cxxlanguagestandard/cxx98.md): The identifier for the ISO C++ 1998 language standard with amendments.
- [CXXLanguageStandard.gnucxx03](cxxlanguagestandard/gnucxx03.md): The identifier for the ISO C++ 1998 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.gnucxx11](cxxlanguagestandard/gnucxx11.md): The identifier for the ISO C++ 2011 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.gnucxx14](cxxlanguagestandard/gnucxx14.md): The identifier for the ISO C++ 2014 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.gnucxx1z](cxxlanguagestandard/gnucxx1z.md): Deprecated. The identifier for the ISO C++ 2017 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.gnucxx98](cxxlanguagestandard/gnucxx98.md): The identifier for the ISO C++ 1998 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.cxx17](cxxlanguagestandard/cxx17.md): The identifier for the ISO C++ 2017 language standard with amendments.
- [CXXLanguageStandard.cxx20](cxxlanguagestandard/cxx20.md): The identifier for the ISO C++ 2020 language standard.
- [CXXLanguageStandard.cxx2b](cxxlanguagestandard/cxx2b.md): The identifier for the ISO C++ 2023 draft language standard.
- [CXXLanguageStandard.gnucxx17](cxxlanguagestandard/gnucxx17.md): The identifier for the ISO C++ 2017 language standard with amendments and GNU extensions.
- [CXXLanguageStandard.gnucxx20](cxxlanguagestandard/gnucxx20.md): The identifier for the ISO C++ 2020 language standard with GNU extensions.
- [CXXLanguageStandard.gnucxx2b](cxxlanguagestandard/gnucxx2b.md): The identifier for the ISO C++ 2023 draft language standard with GNU extensions.

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
- [CLanguageStandard](clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [swiftLanguageModes](package/swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](package/clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](package/cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [SwiftVersion](swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](package/swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`
