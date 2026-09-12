> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/archiveextension](https://developer.apple.com/documentation/arkit/arreferenceobject/archiveextension)

# archiveExtension (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The standard filename extension for exported [ARReferenceObject](../arreferenceobject.md) instances.

## Declaration

```swift
class let archiveExtension: String
```

<a id="Discussion"></a>

## Discussion

Use this filename extension when constructing a URL to save a reference object file with the [export(to:previewImage:)](export%28to_previewimage_%29.md) method.

## See Also

### Saving Recorded Objects

- [export(to:previewImage:)](export%28to_previewimage_%29.md): Deprecated. Writes a binary representation of the object to the specified file URL.

# ARReferenceObjectArchiveExtension (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The standard filename extension for exported [ARReferenceObject](../arreferenceobject.md) instances.

## Declaration

```objectivec
extern NSString * const ARReferenceObjectArchiveExtension;
```

<a id="Discussion"></a>

## Discussion

Use this filename extension when constructing a URL to save a reference object file with the [exportObjectToURL:previewImage:error:](export%28to_previewimage_%29.md) method.

## See Also

### Saving Recorded Objects

- [exportObjectToURL:previewImage:error:](export%28to_previewimage_%29.md): Deprecated. Writes a binary representation of the object to the specified file URL.
