> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/issubtype(of:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/issubtype(of:))

# isSubtype(of:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.

## Declaration

```swift
func isSubtype(of type: UTType) -> Bool
```

## Parameters

- `type`: A [UTType](../uttype-swift.struct.md) instance.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the type directly or indirectly conforms to `type`, but returns [false](https://developer.apple.com/documentation/swift/false) if it’s equal to `type`.

## See Also

### Checking a type’s relationship to another type

- [supertypes](../uttype-swift.struct/supertypes.md): The set of types the type directly or indirectly conforms to.
- [conforms(to:)](conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSupertype(of:)](issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.

# isSubtypeOfType: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.

## Declaration

```objectivec
- (BOOL) isSubtypeOfType:(UTType *) type;
```

## Parameters

- `type`: A [UTType](../uttype-swift.struct.md) instance.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the type directly or indirectly conforms to `type`, but returns [false](https://developer.apple.com/documentation/swift/false) if it’s equal to `type`.

## See Also

### Checking a type’s relationship to another type

- [supertypes](supertypes.md): The set of types the type directly or indirectly conforms to.
- [conformsToType:](conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSupertypeOfType:](issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.
