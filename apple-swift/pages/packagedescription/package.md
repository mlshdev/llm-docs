> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/package](https://developer.apple.com/documentation/packagedescription/package)

# Package

**Framework:** PackageDescription  
**Kind:** Class

The configuration of a Swift package.

## Declaration

```swift
final class Package
```

<a id="overview"></a>

## Overview

Pass configuration options as parameters to your package’s initializer statement to provide the name of the package, its targets, products, dependencies, and other configuration options.

By convention, you need to define the properties of a package in a single nested initializer statement. Don’t modify it after initialization. The following package manifest shows the initialization of a simple package object for the MyLibrary Swift package:

```swift
// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "MyLibrary",
    platforms: [
        .macOS(.v10_15),
    ],
    products: [
        .library(name: "MyLibrary", targets: ["MyLibrary"])
    ],
    dependencies: [
        .package(url: "https://url/of/another/package/named/utility", from: "1.0.0")
    ],
    targets: [
        .target(name: "MyLibrary", dependencies: ["Utility"]),
        .testTarget(name: "MyLibraryTests", dependencies: ["MyLibrary"])
    ]
)
```

In Swift tools versions earlier than 5.4, the package manifest must begin with the string `// swift-tools-version:` followed by a version number specifier. Version 5.4 and later has relaxed the whitespace requirements. The following code listing shows a few examples of valid declarations of the Swift tools version:

```swift
// swift-tools-version:3.0.2
// swift-tools-version:3.1
// swift-tools-version:4.0
// swift-tools-version:5.3
// swift-tools-version: 5.6
```

The Swift tools version declares the version of the `PackageDescription` library, the minimum version of the Swift tools and Swift language compatibility version to process the manifest, and the required minimum version of the Swift tools to use the Swift package. Each version of Swift can introduce updates to the PackageDescription framework, but the previous API version is available to packages which declare a prior tools version. This behavior means you can take advantage of new releases of Swift, the Swift tools, and the PackageDescription library, without having to update your package’s manifest or losing access to existing packages.

## Topics

### Creating a Package

- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageModes:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_defaultlocalization_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguagemodes_clanguagestandard_cxxlanguagestandard_%29.md): Initializes a Swift package with configuration options you provide.
- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:traits:dependencies:targets:swiftLanguageModes:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_defaultlocalization_platforms_pkgconfig_providers_products_traits_dependencies_targets_swiftlanguagemodes_clanguagestandard_cxxlanguagestandard_%29.md): Initializes a Swift package with configuration options you provide.
- [init(name:defaultLocalization:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_defaultlocalization_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29.md): Deprecated. Initializes a Swift package with configuration options you provide.
- [init(name:platforms:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_platforms_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29.md): Deprecated. Initializes a Swift package with configuration options you provide.
- [init(name:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29-7ld3y.md): Deprecated. Initializes a Swift package with configuration options you provide.
- [init(name:pkgConfig:providers:products:dependencies:targets:swiftLanguageVersions:cLanguageStandard:cxxLanguageStandard:)](package/init%28name_pkgconfig_providers_products_dependencies_targets_swiftlanguageversions_clanguagestandard_cxxlanguagestandard_%29-767rj.md): Deprecated. Initializes a Swift package with configuration options you provide.

### Naming the Package

- [name](package/name.md): The name of the Swift package.

### Localizing Package Resources

- [defaultLocalization](package/defaultlocalization.md): The default localization for resources.
- [LanguageTag](languagetag.md): A wrapper around an IETF language tag.

### Configuring Products

- [products](package/products.md): The list of products that this package vends and that clients can use.
- [Product](product.md): The object that defines a package product.

### Configuring Targets

- [targets](package/targets.md): The list of targets that are part of this package.
- [Target](target.md): The basic building block of a Swift package.

### Declaring Supported Platforms

- [platforms](package/platforms.md): The list of minimum versions for platforms supported by the package.
- [SupportedPlatform](supportedplatform.md): A platform that the Swift package supports.
- [Platform](platform.md): A platform supported by Swift Package Manager.

### Configuring System Packages

- [SystemPackageProvider](systempackageprovider.md): The system package providers that this package uses.
- [pkgConfig](package/pkgconfig.md): The name to use for C modules.
- [providers](package/providers.md): An array of providers for a system target.

### Configuring Traits

- [traits](package/traits.md): The set of traits this package provides.
- [Trait](trait.md): A package trait.

### Declaring Package Dependencies

- [dependencies](package/dependencies.md): The list of package dependencies.
- [Package.Dependency](package/dependency.md): A package dependency of a Swift package.

### Declaring Supported Languages

- [SwiftLanguageMode](swiftlanguagemode.md): The Swift language mode used to compile Swift sources in the package
- [CLanguageStandard](clanguagestandard.md): The supported C language standard you use to compile C sources in the package.
- [CXXLanguageStandard](cxxlanguagestandard.md): The supported C++ language standard you use to compile C++ sources in the package.
- [swiftLanguageModes](package/swiftlanguagemodes.md): The list of Swift language modes with which this package is compatible.
- [cLanguageStandard](package/clanguagestandard.md): The C language standard to use for all C targets in this package.
- [cxxLanguageStandard](package/cxxlanguagestandard.md): The C++ language standard to use for all C++ targets in this package.
- [SwiftVersion](swiftversion.md): Deprecated. Type alias to previous name for backward source compatibility
- [swiftLanguageVersions](package/swiftlanguageversions.md): Deprecated. Legacy property name, accesses value of `swiftLanguageModes`

## See Also

### Creating a Package

- [Context](context.md): The context information for a Swift package.
