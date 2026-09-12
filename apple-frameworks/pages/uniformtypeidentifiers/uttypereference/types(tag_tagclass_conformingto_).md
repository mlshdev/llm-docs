> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/types(tag:tagclass:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/types(tag:tagclass:conformingto:))

# types(tag:tagClass:conformingTo:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns an array of types from the provided tag and tag class.

## Declaration

```swift
class func types(tag: String, tagClass: String, conformingTo supertype: UTType?) -> [UTType]
```

## Parameters

- `tag`: The desired tag, such as a filename extension.
- `tagClass`: The tag class, such as [UTTagClassFilenameExtension](../uttagclassfilenameextension.md).
- `supertype`: Another type that the resulting type must conform to; for example, [UTTypeData](../uttypedata.md).

# typesWithTag:tagClass:conformingToType: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns an array of types from the provided tag and tag class.

## Declaration

```objectivec
+ (NSArray<UTType *> *) typesWithTag:(NSString *) tag tagClass:(NSString *) tagClass conformingToType:(UTType *) supertype;
```

## Parameters

- `tag`: The desired tag, such as a filename extension.
- `tagClass`: The tag class, such as [UTTagClassFilenameExtension](../uttagclassfilenameextension.md).
- `supertype`: Another type that the resulting type must conform to; for example, [UTTypeData](../uttypedata.md).
