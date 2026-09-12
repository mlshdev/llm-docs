> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptionequalignoringextensionkeys(_:otherformatdescription:extensionkeystoignore:sampledescriptionextensionatomkeystoignore:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptionequalignoringextensionkeys(_:otherformatdescription:extensionkeystoignore:sampledescriptionextensionatomkeystoignore:))

# CMFormatDescriptionEqualIgnoringExtensionKeys(\_:otherFormatDescription:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.

## Declaration

```swift
func CMFormatDescriptionEqualIgnoringExtensionKeys(_ formatDescription: CMFormatDescription?, otherFormatDescription: CMFormatDescription?, extensionKeysToIgnore formatDescriptionExtensionKeysToIgnore: CFTypeRef?, sampleDescriptionExtensionAtomKeysToIgnore: CFTypeRef?) -> Bool
```

## Parameters

- `formatDescription`: The first description to compare.
- `otherFormatDescription`: The second description to compare.
- `formatDescriptionExtensionKeysToIgnore`: A single format description extension key (`CFString`) or an array (`CFArray`) of keys.
- `sampleDescriptionExtensionAtomKeysToIgnore`: A single sample description extension atom key (four-character `CFString`) or an array (`CFArray`) of such keys.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two descriptions are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you specify any keys, the function ignores `kCMFormatDescriptionExtension_VerbatimSampleDescription` and `kCMFormatDescriptionExtension_VerbatimISOSampleEntry` for the purpose of comparison.

> **Note**

>  This function is `NULL` safe.

For extension atom keys, see [kCMFormatDescriptionExtension_SampleDescriptionExtensionAtoms](kcmformatdescriptionextension_sampledescriptionextensionatoms.md).

## See Also

### Comparing Format Descriptions

- [CMFormatDescriptionEqual(\_:otherFormatDescription:)](cmformatdescriptionequal%28__otherformatdescription_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal.

# CMFormatDescriptionEqualIgnoringExtensionKeys (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.

## Declaration

```objectivec
extern Boolean CMFormatDescriptionEqualIgnoringExtensionKeys(CMFormatDescriptionRef formatDescription, CMFormatDescriptionRef otherFormatDescription, CFTypeRef formatDescriptionExtensionKeysToIgnore, CFTypeRef sampleDescriptionExtensionAtomKeysToIgnore);
```

## Parameters

- `formatDescription`: The first description to compare.
- `otherFormatDescription`: The second description to compare.
- `formatDescriptionExtensionKeysToIgnore`: A single format description extension key (`CFString`) or an array (`CFArray`) of keys.
- `sampleDescriptionExtensionAtomKeysToIgnore`: A single sample description extension atom key (four-character `CFString`) or an array (`CFArray`) of such keys.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two descriptions are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you specify any keys, the function ignores `kCMFormatDescriptionExtension_VerbatimSampleDescription` and `kCMFormatDescriptionExtension_VerbatimISOSampleEntry` for the purpose of comparison.

> **Note**

>  This function is `NULL` safe.

For extension atom keys, see [kCMFormatDescriptionExtension_SampleDescriptionExtensionAtoms](kcmformatdescriptionextension_sampledescriptionextensionatoms.md).

## See Also

### Comparing Format Descriptions

- [CMFormatDescriptionEqual](cmformatdescriptionequal%28__otherformatdescription_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal.
