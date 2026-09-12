> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptionequal(_:otherformatdescription:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptionequal(_:otherformatdescription:))

# CMFormatDescriptionEqual(\_:otherFormatDescription:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two format descriptions are equal.

## Declaration

```swift
func CMFormatDescriptionEqual(_ formatDescription: CMFormatDescription?, otherFormatDescription: CMFormatDescription?) -> Bool
```

## Parameters

- `formatDescription`: The first description to compare.
- `otherFormatDescription`: The second description to compare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two descriptions are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This calls `CFEqual` on the provided `CMFormatDescription` objects. In contrast to the Core Foundation call it is `NULL` safe.

## See Also

### Comparing Format Descriptions

- [CMFormatDescriptionEqualIgnoringExtensionKeys(\_:otherFormatDescription:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:)](cmformatdescriptionequalignoringextensionkeys%28__otherformatdescription_extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.

# CMFormatDescriptionEqual (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two format descriptions are equal.

## Declaration

```objectivec
extern Boolean CMFormatDescriptionEqual(CMFormatDescriptionRef formatDescription, CMFormatDescriptionRef otherFormatDescription);
```

## Parameters

- `formatDescription`: The first description to compare.
- `otherFormatDescription`: The second description to compare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two descriptions are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This calls `CFEqual` on the provided `CMFormatDescription` objects. In contrast to the Core Foundation call it is `NULL` safe.

## See Also

### Comparing Format Descriptions

- [CMFormatDescriptionEqualIgnoringExtensionKeys](cmformatdescriptionequalignoringextensionkeys%28__otherformatdescription_extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.
