> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/allowsediting](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/allowsediting)

# allowsEditing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the user is allowed to edit a selected still image or movie.

## Declaration

```swift
var allowsEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you allow the user to edit still images or movies, the delegate may receive a dictionary with information about the edits that were made. The protocol for the delegate is described in [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md).

This property is set to [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Configuring the picker

- [mediaTypes](mediatypes.md): An array that indicates the media types to access by the media picker controller.

# allowsEditing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the user is allowed to edit a selected still image or movie.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsEditing;
```

<a id="Discussion"></a>

## Discussion

If you allow the user to edit still images or movies, the delegate may receive a dictionary with information about the edits that were made. The protocol for the delegate is described in [UIImagePickerControllerDelegate](../uiimagepickercontrollerdelegate.md).

This property is set to [false](https://developer.apple.com/documentation/swift/false) by default.

## See Also

### Configuring the picker

- [mediaTypes](mediatypes.md): An array that indicates the media types to access by the media picker controller.
- [allowsImageEditing](allowsimageediting.md): Deprecated. A Boolean value that indicates whether the user is allowed to edit a selected image.
