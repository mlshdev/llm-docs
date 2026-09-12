> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/types(tag:tagclass:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/types(tag:tagclass:conformingto:))

# types(tag:tagClass:conformingTo:)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns an array of types from the provided tag and tag class.

## Declaration

```swift
static func types(tag: String, tagClass: UTTagClass, conformingTo supertype: UTType?) -> [UTType]
```

## Parameters

- `tag`: The tag, such as a filename extension.
- `tagClass`: The tag class, such as [filenameExtension](../uttagclass/filenameextension.md).
- `supertype`: Another type to which resulting types must conform. A value of `nil` indicates that conformance isn’t required.

<a id="Discussion"></a>

## Discussion

If the system doesn’t find any types with the provided tag but the inputs were otherwise valid, it may provide a dynamic type. The initializer returns an empty array if the inputs aren’t valid.
