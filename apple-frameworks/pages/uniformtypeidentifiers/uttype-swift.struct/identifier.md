> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/identifier](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/identifier)

# identifier

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The string that represents the type.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

The identifier uniquely identifies its type, represented by a reverse-DNS string, such as `public.jpeg` or `com.adobe.pdf`.

API that doesn’t use [UTType](../uttype-swift.struct.md) uses a `String` or [CFString](../../corefoundation/cfstring.md) to refer to a type by its identifier.

## See Also

### Identifying a type

- [UTType.ReferenceType](referencetype.md): An alias for the associated reference type.
