> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontroller/allowspickingmultipleitems](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontroller/allowspickingmultipleitems)

# allowsPickingMultipleItems (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A Boolean value specifying the default selection behavior for a media item picker.

## Declaration

```swift
var allowsPickingMultipleItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media item picker allows the selection of multiple media items. When set to [false](https://developer.apple.com/documentation/swift/false), the media picker only allows the selection of a single media item. The label for the button that dismisses the picker is “Done” when this value is [true](https://developer.apple.com/documentation/swift/true) and “Cancel” when it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Using a media item picker

- [showsCloudItems](showsclouditems.md): A Boolean value specifying whether to display iCloud Media Library items for a media picker.
- [mediaTypes](mediatypes.md): The media types that media item picker presents.
- [prompt](prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.

# allowsPickingMultipleItems (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A Boolean value specifying the default selection behavior for a media item picker.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsPickingMultipleItems;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the media item picker allows the selection of multiple media items. When set to [false](https://developer.apple.com/documentation/swift/false), the media picker only allows the selection of a single media item. The label for the button that dismisses the picker is “Done” when this value is [true](https://developer.apple.com/documentation/swift/true) and “Cancel” when it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Using a media item picker

- [showsCloudItems](showsclouditems.md): A Boolean value specifying whether to display iCloud Media Library items for a media picker.
- [mediaTypes](mediatypes.md): The media types that media item picker presents.
- [prompt](prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.
