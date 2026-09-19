> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaximummessageitemimagesize

# CPMaximumMessageItemImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size of a message list item’s image.

## Declaration

```swift
let CPMaximumMessageItemImageSize: CGSize
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the maximum size of an image that a message list item can display in its leading and trailing regions.

## See Also

### Creating a Configuration

- [init(leadingItem:leadingImage:unread:)](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates a leading configuration that contains an item and an image.

# CPMaximumMessageItemImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size of a message list item’s image.

## Declaration

```objectivec
extern const CGSize CPMaximumMessageItemImageSize;
```

<a id="Discussion"></a>

## Discussion

At runtime, use this value to determine the maximum size of an image that a message list item can display in its leading and trailing regions.

## See Also

### Creating a Configuration

- [initWithLeadingItem:leadingImage:unread:](cpmessagelistitemleadingconfiguration/init%28leadingitem_leadingimage_unread_%29.md): Creates a leading configuration that contains an item and an image.
