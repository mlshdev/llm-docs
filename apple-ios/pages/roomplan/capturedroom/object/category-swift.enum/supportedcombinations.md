> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/object/category-swift.enum/supportedcombinations](https://developer.apple.com/documentation/roomplan/capturedroom/object/category-swift.enum/supportedcombinations)

# supportedCombinations

**Framework:** RoomPlan  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An array of supported attributes that differs by category.

## Declaration

```swift
var supportedCombinations: [[any CapturedRoomAttribute]] { get }
```

<a id="discussion"></a>

## Discussion

The framework defines the contents of this array. Only compatible attributes can pair up in association with a 3D model, for example, with the [CapturedRoom.ModelProvider](../../modelprovider.md) function [setModelFileURL(\_:for:)](../../modelprovider/setmodelfileurl%28__for_%29-8xio.md). These [CapturedRoom.ModelProvider](../../modelprovider.md) functions for `setModelFileURL` and `modelFileURL` throw [CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported](../../modelprovider/error/attributecombinationnotsupported.md) if no object category supports all of the attributes in the arguments to their call.

## See Also

### Determining supported attributes

- [supportedAttributeTypes](supportedattributetypes.md): Defines the attributes types compatible with a particular object category.
- [supportsCombination(\_:)](supportscombination%28__%29.md): Returns a Boolean value that indicates whether a category supports the given attribute combination.
