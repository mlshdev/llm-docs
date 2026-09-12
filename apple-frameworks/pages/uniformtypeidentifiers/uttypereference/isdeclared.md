> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/isdeclared](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/isdeclared)

# isDeclared (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the system declares the type.

## Declaration

```swift
var isDeclared: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system either declares a type or dynamically generates a type, but not both.

## See Also

### Obtaining additional type information

- [isDynamic](isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [isPublic](ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](../uttype-swift.struct/referenceurl.md): The reference URL for the type.
- [version](../uttype-swift.struct/version.md): The type’s version, if available.

# declared (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the system declares the type.

## Declaration

```objectivec
@property (readonly, getter=isDeclared) BOOL declared;
```

<a id="Discussion"></a>

## Discussion

The system either declares a type or dynamically generates a type, but not both.

## See Also

### Obtaining additional type information

- [dynamic](isdynamic.md): A Boolean value that indicates whether the system generates the type.
- [publicType](ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](referenceurl.md): The reference URL for the type.
- [version](version.md): The type’s version, if available.
