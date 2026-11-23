> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/leadingimage

# leadingImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The custom image to display in the row’s leading region.

## Declaration

```swift
var leadingImage: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

Specify this image at initialization time.

## See Also

### Getting the configuration’s state

- [isUnread](isunread.md): A Boolean value that indicates the unread status of the conversation.

# leadingImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The custom image to display in the row’s leading region.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIImage * leadingImage;
```

<a id="discussion"></a>

## Discussion

Specify this image at initialization time.

## See Also

### Getting the configuration’s state

- [unread](isunread.md): A Boolean value that indicates the unread status of the conversation.
