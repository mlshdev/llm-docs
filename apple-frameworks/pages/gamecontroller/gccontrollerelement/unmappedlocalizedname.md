> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/unmappedlocalizedname](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/unmappedlocalizedname)

# unmappedLocalizedName (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The element’s localized name, not the remapped name.

## Declaration

```swift
var unmappedLocalizedName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

To present the element that a user wants to remap in your interface, use this property to get the original name. Otherwise, use the [localizedName](localizedname.md) property to get the possibly remapped name.

## See Also

### Getting a localized name

- [localizedName](localizedname.md): The localized name for the element or the remapped element.

# unmappedLocalizedName (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The element’s localized name, not the remapped name.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * unmappedLocalizedName;
```

<a id="Discussion"></a>

## Discussion

To present the element that a user wants to remap in your interface, use this property to get the original name. Otherwise, use the [localizedName](localizedname.md) property to get the possibly remapped name.

## See Also

### Getting a localized name

- [localizedName](localizedname.md): The localized name for the element or the remapped element.
