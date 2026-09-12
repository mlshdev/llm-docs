> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptiongetextension(_:extensionkey:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptiongetextension(_:extensionkey:))

# CMFormatDescriptionGetExtension(\_:extensionKey:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an extension from the format description by using an extension key.

## Declaration

```swift
func CMFormatDescriptionGetExtension(_ desc: CMFormatDescription, extensionKey: CFString) -> CFPropertyList?
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.
- `extensionKey`: The key of the extension to return. May not be `NULL`.

<a id="return-value"></a>

## Return Value

An extension, or `NULL` if it doesn’t exist.

<a id="Discussion"></a>

## Discussion

The extension is always a valid property list object. This means that it will be either a `CFNumber`, `CFString`, `CFBoolean`, `CFArray`, `CFDictionary`, `CFDate`, or `CFData`. If it’s a `CFDictionary`, the keys will all be `CFStrings`. The extension this function returns is not retained by this call, so it’s only valid as long as the `CMFormatDescription` is valid — retain it to keep it longer.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType(\_:)](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType(\_:)](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtensions(\_:)](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID()](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

# CMFormatDescriptionGetExtension (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an extension from the format description by using an extension key.

## Declaration

```objectivec
extern CFPropertyListRefCMFormatDescriptionGetExtension(CMFormatDescriptionRef desc, CFStringRef extensionKey);
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.
- `extensionKey`: The key of the extension to return. May not be `NULL`.

<a id="return-value"></a>

## Return Value

An extension, or `NULL` if it doesn’t exist.

<a id="Discussion"></a>

## Discussion

The extension is always a valid property list object. This means that it will be either a `CFNumber`, `CFString`, `CFBoolean`, `CFArray`, `CFDictionary`, `CFDate`, or `CFData`. If it’s a `CFDictionary`, the keys will all be `CFStrings`. The extension this function returns is not retained by this call, so it’s only valid as long as the `CMFormatDescription` is valid — retain it to keep it longer.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtensions](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.
