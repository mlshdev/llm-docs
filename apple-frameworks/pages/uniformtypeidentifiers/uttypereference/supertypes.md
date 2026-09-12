> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/supertypes](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/supertypes)

# supertypes (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The set of types the type directly or indirectly conforms to.

## Declaration

```swift
var supertypes: Set<UTType> { get }
```

# supertypes (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The set of types the type directly or indirectly conforms to.

## Declaration

```objectivec
@property (readonly) NSSet<UTType *> * supertypes;
```

## See Also

### Checking a type’s relationship to another type

- [conformsToType:](conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSubtypeOfType:](issubtype%28of_%29.md): Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.
- [isSupertypeOfType:](issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.
