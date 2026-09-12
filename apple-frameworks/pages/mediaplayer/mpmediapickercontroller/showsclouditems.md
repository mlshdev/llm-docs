> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontroller/showsclouditems](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontroller/showsclouditems)

# showsCloudItems (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

A Boolean value specifying whether to display iCloud Media Library items for a media picker.

## Declaration

```swift
var showsCloudItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the picker shows available iCloud Music Library items, including purchased items, imported content, and Apple Music subscription content. When set to [false](https://developer.apple.com/documentation/swift/false), the picker only shows content downloaded to the device. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Using a media item picker

- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value specifying the default selection behavior for a media item picker.
- [mediaTypes](mediatypes.md): The media types that media item picker presents.
- [prompt](prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.

# showsCloudItems (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

A Boolean value specifying whether to display iCloud Media Library items for a media picker.

## Declaration

```objectivec
@property (nonatomic) BOOL showsCloudItems;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the picker shows available iCloud Music Library items, including purchased items, imported content, and Apple Music subscription content. When set to [false](https://developer.apple.com/documentation/swift/false), the picker only shows content downloaded to the device. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Using a media item picker

- [allowsPickingMultipleItems](allowspickingmultipleitems.md): A Boolean value specifying the default selection behavior for a media item picker.
- [mediaTypes](mediatypes.md): The media types that media item picker presents.
- [prompt](prompt.md): A prompt, for the user, that appears above the navigation bar buttons.
- [showsItemsWithProtectedAssets](showsitemswithprotectedassets.md): A Boolean value that specifies whether the media item picker displays protected assets.
