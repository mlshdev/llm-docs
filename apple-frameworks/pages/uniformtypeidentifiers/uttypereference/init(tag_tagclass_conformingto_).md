> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/init(tag:tagclass:conformingto:)](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/init(tag:tagclass:conformingto:))

# init(tag:tagClass:conformingTo:) (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
convenience init?(tag: String, tagClass: String, conformingTo supertype: UTType?)
```

## Parameters

- `tag`: The tag, such as the path extension, for which a type is desired.
- `tagClass`: The class of the tag, such as \\c UTTagClassFilenameExtension.
- `supertype`: Another type that the resulting type must conform to. If \\c nil, no conformance is required.

<a id="return-value"></a>

## Return Value

A type. If no types are known to the system with the specified tag but the inputs were otherwise valid, a dynamic type may be provided. If the inputs were not valid, returns \\c nil.

<a id="discussion"></a>

## Discussion

Create a type given a type tag.

# typeWithTag:tagClass:conformingToType: (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
+ (instancetype) typeWithTag:(NSString *) tag tagClass:(NSString *) tagClass conformingToType:(UTType *) supertype;
```

## Parameters

- `tag`: The tag, such as the path extension, for which a type is desired.
- `tagClass`: The class of the tag, such as \\c UTTagClassFilenameExtension.
- `supertype`: Another type that the resulting type must conform to. If \\c nil, no conformance is required.

<a id="return-value"></a>

## Return Value

A type. If no types are known to the system with the specified tag but the inputs were otherwise valid, a dynamic type may be provided. If the inputs were not valid, returns \\c nil.

<a id="discussion"></a>

## Discussion

Create a type given a type tag.
