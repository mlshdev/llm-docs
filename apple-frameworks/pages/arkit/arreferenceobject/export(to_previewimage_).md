> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceobject/export(to:previewimage:)](https://developer.apple.com/documentation/arkit/arreferenceobject/export(to:previewimage:))

# export(to:previewImage:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Writes a binary representation of the object to the specified file URL.

> Only supported for legacy reference objects.

## Declaration

```swift
func export(to url: URL, previewImage: UIImage?) throws
```

## Parameters

- `url`: The file URL at which to write the reference object data.
- `previewImage`: A thumbnail image to be embedded in the reference object’s filesystem representation.

  ARKit ignores preview images when loading reference objects. Instead, this image helps make reference object files visually identifiable in external tools like Xcode, Finder, and Quick Look.

<a id="Discussion"></a>

## Discussion

After exporting a reference object from your object-scanning app to a file, you can bundle that reference object into other apps you create by inserting it into an Xcode asset catalog.

## See Also

### Saving Recorded Objects

- [archiveExtension](archiveextension.md): The standard filename extension for exported [ARReferenceObject](../arreferenceobject.md) instances.

# exportObjectToURL:previewImage:error: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 27.0) · iPadOS 12.0+ (deprecated in 27.0)

Writes a binary representation of the object to the specified file URL.

> Only supported for legacy reference objects.

## Declaration

```objectivec
- (BOOL) exportObjectToURL:(NSURL *) url previewImage:(UIImage *) previewImage error:(NSError **) error;
```

## Parameters

- `url`: The file URL at which to write the reference object data.
- `previewImage`: A thumbnail image to be embedded in the reference object’s filesystem representation.

  ARKit ignores preview images when loading reference objects. Instead, this image helps make reference object files visually identifiable in external tools like Xcode, Finder, and Quick Look.
- `error`: A pointer to an [NSError](../../foundation/nserror.md). On completion, if the method returns [false](https://developer.apple.com/documentation/swift/false), the pointer is populated with an object describing the failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeded. If [false](https://developer.apple.com/documentation/swift/false), check the `error` parameter for failure details.

<a id="Discussion"></a>

## Discussion

After exporting a reference object from your object-scanning app to a file, you can bundle that reference object into other apps you create by inserting it into an Xcode asset catalog.

## See Also

### Saving Recorded Objects

- [ARReferenceObjectArchiveExtension](archiveextension.md): The standard filename extension for exported [ARReferenceObject](../arreferenceobject.md) instances.
