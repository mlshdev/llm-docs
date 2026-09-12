> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescriptiongetextensions(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescriptiongetextensions(_:))

# CMFormatDescriptionGetExtensions(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns all of the extensions for a format description.

## Declaration

```swift
func CMFormatDescriptionGetExtensions(_ desc: CMFormatDescription) -> CFDictionary?
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

An immutable dictionary that contains all the extensions of the `CMFormatDescription`.  May be `NULL`.

<a id="Discussion"></a>

## Discussion

If there are no extensions, the function returns `NULL`. Extensions dictionaries are valid property list objects.  This means that dictionary keys are all `CFStrings`, and the values are all either `CFNumber`, `CFString`, `CFBoolean`, `CFArray`, `CFDictionary`, `CFDate`, or `CFData`. The returned dictionary is not retained by this call, so clients are required to retain it if they need to keep it longer.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType(\_:)](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType(\_:)](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension(\_:extensionKey:)](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetTypeID()](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

# CMFormatDescriptionGetExtensions (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns all of the extensions for a format description.

## Declaration

```objectivec
extern CFDictionaryRefCMFormatDescriptionGetExtensions(CMFormatDescriptionRef desc);
```

## Parameters

- `desc`: The `CMFormatDescription` to examine.

<a id="return-value"></a>

## Return Value

An immutable dictionary that contains all the extensions of the `CMFormatDescription`.  May be `NULL`.

<a id="Discussion"></a>

## Discussion

If there are no extensions, the function returns `NULL`. Extensions dictionaries are valid property list objects.  This means that dictionary keys are all `CFStrings`, and the values are all either `CFNumber`, `CFString`, `CFBoolean`, `CFArray`, `CFDictionary`, `CFDate`, or `CFData`. The returned dictionary is not retained by this call, so clients are required to retain it if they need to keep it longer.

## See Also

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetTypeID](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.
