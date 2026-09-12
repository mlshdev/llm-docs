> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package/init(name:pkgconfig:providers:products:dependencies:targets:swiftlanguageversions:clanguagestandard:cxxlanguagestandard:)-767rj](https://developer.apple.com/documentation/packagedescription/package/init(name:pkgconfig:providers:products:dependencies:targets:swiftlanguageversions:clanguagestandard:cxxlanguagestandard:)-767rj)

# init(name:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)

**Framework:** PackageDescription  
**Kind:** Initializer

Initializes a Swift package with configuration options you provide.

## Declaration

```swift
init(name: String, pkgConfig: String? = nil, providers: [SystemPackageProvider]? = nil, products: [Product] = [], dependencies: [Package.Dependency] = [], targets: [Target] = [], swiftLanguageVersions: [SwiftVersion]? = nil, cLanguageStandard: CLanguageStandard? = nil, cxxLanguageStandard: CXXLanguageStandard? = nil)
```

## Parameters

- `name`: The name of the Swift package, or `nil`, if you want the Swift Package Manager to deduce the name from the package’s Git URL.
- `pkgConfig`: The name to use for C modules. If present, the Swift Package Manager searches for a `<name>.pc` file to get the additional flags required for a system target.
- `providers`: The system package providers that this package uses.
- `products`: The list of products that this package makes available for clients to use.
- `dependencies`: The list of package dependencies.
- `targets`: The list of targets that are part of this package.
- `swiftLanguageVersions`: The list of Swift versions that this package is compatible with.
- `cLanguageStandard`: The C language standard to use for all C targets in this package.
- `cxxLanguageStandard`: The C++ language standard to use for all C++ targets in this package.

## See Also

### Creating a Package

- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageModes:cLanguageStandard:cxxLanguageStandard:)](init%28name_defaultlocalization_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguagemodes_clanguagestandard_cxxlanguagestandard_%29.md): Initializes a Swift package with configuration options you provide.
- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:traits:dependencies:targets:swiftLanguageModes:cLanguageStandard:cxxLanguageStandard:)](init%28name_defaultlocalization_platforms_pkgconfig_providers_products_traits_dependencies_targets_swiftlanguagemodes_clanguagestandard_cxxlanguagestandard_%29.md): Initializes a Swift package with configuration options you provide.
- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](init%28name_defaultlocalization_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29.md): Deprecated. Initializes a Swift package with configuration options you provide.
- [init(name:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](init%28name_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29.md): Deprecated. Initializes a Swift package with configuration options you provide.
- [init(name:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](init%28name_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29-7ld3y.md): Deprecated. Initializes a Swift package with configuration options you provide.
