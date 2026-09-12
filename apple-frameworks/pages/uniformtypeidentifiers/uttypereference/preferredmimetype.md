> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/preferredmimetype](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/preferredmimetype)

# preferredMIMEType (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The preferred MIME type for the type.

## Declaration

```swift
var preferredMIMEType: String? { get }
```

<a id="Discussion"></a>

## Discussion

If available, the preferred (first available) tag of class [mimeType](../uttagclass/mimetype.md). If not `nil`, the value of this property is the best available MIME type value for this type.

The value of this property is equivalent to, but more efficient than:

```swift
type.tags[.mimeType]?.first
```

# preferredMIMEType (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The preferred MIME type for the type.

## Declaration

```objectivec
@property (readonly, nullable) NSString * preferredMIMEType;
```

<a id="Discussion"></a>

## Discussion

If available, the preferred (first available) tag of class [mimeType](../uttagclass/mimetype.md). If not `nil`, the value of this property is the best available MIME type value for this type.

The value of this property is equivalent to, but more efficient than:

```swift
type.tags[.mimeType]?.first
```

## See Also

### Obtaining tags

- [preferredFilenameExtension](preferredfilenameextension.md): The preferred filename extension for the type.
- [tags](tags.md): The tag specification dictionary of the type.
