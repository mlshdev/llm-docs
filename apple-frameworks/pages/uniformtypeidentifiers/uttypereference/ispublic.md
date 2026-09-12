> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/ispublic](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/ispublic)

# isPublic (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the type is in the public domain.

## Declaration

```swift
var isPublic: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Types in the public domain have identifiers starting with `public`, and are generally defined by a standards body or by convention. Public types aren’t dynamic.

## See Also

### Obtaining additional type information

- [isDeclared](isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [isDynamic](isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [referenceURL](../uttype-swift.struct/referenceurl.md): The reference URL for the type.
- [version](../uttype-swift.struct/version.md): The type’s version, if available.

# publicType (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the type is in the public domain.

## Declaration

```objectivec
@property (readonly, getter=isPublicType) BOOL publicType;
```

<a id="Discussion"></a>

## Discussion

Types in the public domain have identifiers starting with `public`, and are generally defined by a standards body or by convention. Public types aren’t dynamic.

## See Also

### Obtaining additional type information

- [declared](isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [dynamic](isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [referenceURL](referenceurl.md): The reference URL for the type.
- [version](version.md): The type’s version, if available.
