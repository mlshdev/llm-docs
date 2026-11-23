> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/isunread

# isUnread (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the unread status of the conversation.

## Declaration

```swift
var isUnread: Bool { get }
```

<a id="discussion"></a>

## Discussion

Specify this value at initialization time. When the value of this property is `true`, CarPlay displays an unread indicator in the row’s leading region. When the value is `false`, CarPlay doesn’t display this indicator.

## See Also

### Getting the configuration’s state

- [leadingImage](leadingimage.md): The custom image to display in the row’s leading region.

# unread (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates the unread status of the conversation.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isUnread) BOOL unread;
```

<a id="discussion"></a>

## Discussion

Specify this value at initialization time. When the value of this property is `true`, CarPlay displays an unread indicator in the row’s leading region. When the value is `false`, CarPlay doesn’t display this indicator.

## See Also

### Getting the configuration’s state

- [leadingImage](leadingimage.md): The custom image to display in the row’s leading region.
