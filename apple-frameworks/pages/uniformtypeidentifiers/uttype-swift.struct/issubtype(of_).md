> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/issubtype(of:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/issubtype(of:))

# isSubtype(of:)

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

- [supertypes](supertypes.md): The set of types the type directly or indirectly conforms to.
- [conforms(to:)](conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSupertype(of:)](issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.
- [Navigating Hierarchical Data Using Outline and Split Views](https://developer.apple.com/documentation/appkit/navigating-hierarchical-data-using-outline-and-split-views): Build a structured user interface that simplifies navigation in your app.
