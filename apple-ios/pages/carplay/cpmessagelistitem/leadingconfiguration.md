> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/leadingconfiguration

# leadingConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional content to display at the leading edge of the row.

## Declaration

```swift
var leadingConfiguration: CPMessageListItemLeadingConfiguration { get set }
```

<a id="discussion"></a>

## Discussion

This property specifies visual elements to display before the row text. For example, you can tell CarPlay to display an unread indicator or a custom image.

## See Also

### Configuring additional details

- [trailingConfiguration](trailingconfiguration.md): Additional content to display at the trailing edge of the row.
- [userInfo](userinfo.md): Custom information you want to store with the message list item.

# leadingConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional content to display at the leading edge of the row.

## Declaration

```objectivec
@property (nonatomic, strong) CPMessageListItemLeadingConfiguration * leadingConfiguration;
```

<a id="discussion"></a>

## Discussion

This property specifies visual elements to display before the row text. For example, you can tell CarPlay to display an unread indicator or a custom image.

## See Also

### Configuring additional details

- [trailingConfiguration](trailingconfiguration.md): Additional content to display at the trailing edge of the row.
- [userInfo](userinfo.md): Custom information you want to store with the message list item.
