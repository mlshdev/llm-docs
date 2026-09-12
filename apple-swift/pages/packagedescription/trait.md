> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/trait](https://developer.apple.com/documentation/packagedescription/trait)

# Trait

**Framework:** PackageDescription  
**Kind:** Structure  
**Availability:** SwiftPM 6.1+

A package trait.

## Declaration

```swift
struct Trait
```

<a id="overview"></a>

## Overview

A trait is a package feature that expresses conditional compilation and potentially optional dependencies. It is typically used to expose additional or extended API for the package.

When you define a trait on a package, the package manager uses the name of that trait as a conditional block for the package’s code. Use the conditional block to enable imports or code paths for that trait. For example, a trait with the canonical name `MyTrait` allows you to use the name as a conditional block:

```swift
#if MyTrait
// additional imports or APIs that MyTrait enables
#endif // MyTrait
```

> **Important**

> Traits must be strictly additive. Enabling a trait **must not** remove API.

If your conditional code requires a dependency that you want to enable only when the trait is enabled, add a conditional declaration to the target dependencies, then include the import statement within the conditional block. The following example illustrates enabling the dependency `MyDependency` when the trait `Trait1` is enabled:

```swift
targets: [
   .target(
       name: "MyTarget",
       dependencies: [
           .product(
               name: "MyAPI",
               package: "MyDependency",
               condition: .when(traits: ["Trait1"])
           )
       ]
   ),
]
```

Coordinate a declaration like the example above with code that imports the dependency in a conditional block:

```swift
#if Trait1
import MyAPI
#endif // Trait1
```

## Topics

### Initializers

- [init(name:description:enabledTraits:)](trait/init%28name_description_enabledtraits_%29.md): Creates a trait with a name, a description, and set of additional traits it enables.
- [init(stringLiteral:)](trait/init%28stringliteral_%29.md): Creates a trait with the name you provide.

### Instance Properties

- [description](trait/description.md): The trait’s description.
- [enabledTraits](trait/enabledtraits.md): A set of other traits of this package that this trait enables.
- [name](trait/name.md): The trait’s canonical name.

### Type Methods

- [default(enabledTraits:)](trait/default%28enabledtraits_%29.md): Declares the default traits for this package.
- [trait(name:description:enabledTraits:)](trait/trait%28name_description_enabledtraits_%29.md): Creates a trait with a name, a description, and set of additional traits it enables.

## Relationships

### Conforms To

- [Equatable](../swift/equatable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](../swift/expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringLiteral](../swift/expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](../swift/expressiblebyunicodescalarliteral.md)
- [Hashable](../swift/hashable.md)

## See Also

### Configuring Traits

- [traits](package/traits.md): The set of traits this package provides.
