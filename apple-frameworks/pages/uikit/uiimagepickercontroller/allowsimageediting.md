> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiimagepickercontroller/allowsimageediting

# allowsImageEditing

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.1) · iPadOS 2.0+ (deprecated in 3.1) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the user is allowed to edit a selected image.

> Use [allowsEditing](allowsediting.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsImageEditing;
```

<a id="Discussion"></a>

## Discussion

If you allow the user to edit images, the delegate may receive a dictionary with information about the edits that were made.

This property is set to [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Configuring the picker

- [mediaTypes](mediatypes.md): An array that indicates the media types to access by the media picker controller.
- [allowsEditing](allowsediting.md): A Boolean value that indicates whether the user is allowed to edit a selected still image or movie.
