> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptiongettypeid()](https://developer.apple.com/documentation/coremedia/cmformatdescriptiongettypeid())

# CMFormatDescriptionGetTypeID() (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the Core Foundation type identifier that identifies format description objects.

## Declaration

```swift
func CMFormatDescriptionGetTypeID() -> CFTypeID
```

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is a `CMFormatDescription` by comparing CFGetTypeID(object) with `CMFormatDescriptionGetTypeID`().

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType(\_:)](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType(\_:)](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension(\_:extensionKey:)](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions(\_:)](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.

# CMFormatDescriptionGetTypeID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the Core Foundation type identifier that identifies format description objects.

## Declaration

```objectivec
extern CFTypeID CMFormatDescriptionGetTypeID();
```

<a id="Discussion"></a>

## Discussion

You can check if a `CFTypeRef` object is a `CMFormatDescription` by comparing CFGetTypeID(object) with `CMFormatDescriptionGetTypeID`().

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
