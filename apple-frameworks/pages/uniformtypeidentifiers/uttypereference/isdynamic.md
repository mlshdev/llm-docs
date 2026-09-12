> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/isdynamic](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/isdynamic)

# isDynamic (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the system generates the type.

## Declaration

```swift
var isDynamic: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system recognizes dynamic types, but they may not be directly declared or claimed by an app. The system returns dynamic types when it encounters a file whose metadata doesn’t have a corresponding type known to the system.

The system either declares a type or dynamically generates a type, but not both.

## See Also

### Obtaining additional type information

- [isDeclared](isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [isPublic](ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](../uttype-swift.struct/referenceurl.md): The reference URL for the type.
- [version](../uttype-swift.struct/version.md): The type’s version, if available.

# dynamic (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the system generates the type.

## Declaration

```objectivec
@property (readonly, getter=isDynamic) BOOL dynamic;
```

<a id="Discussion"></a>

## Discussion

The system recognizes dynamic types, but they may not be directly declared or claimed by an app. The system returns dynamic types when it encounters a file whose metadata doesn’t have a corresponding type known to the system.

The system either declares a type or dynamically generates a type, but not both.

## See Also

### Obtaining additional type information

- [declared](isdeclared.md): A Boolean value that indicates whether the system declares the type.
- [publicType](ispublic.md): A Boolean value that indicates whether the type is in the public domain.
- [referenceURL](referenceurl.md): The reference URL for the type.
- [version](version.md): The type’s version, if available.
