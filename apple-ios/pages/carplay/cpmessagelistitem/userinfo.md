> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Custom information you want to store with the message list item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="discussion"></a>

## Discussion

Store any app-specific data for the item in this property. For example, store the unique ID of the conversation or contact object. The item maintains a strong reference to the object you specify.

## See Also

### Configuring additional details

- [leadingConfiguration](leadingconfiguration.md): Additional content to display at the leading edge of the row.
- [trailingConfiguration](trailingconfiguration.md): Additional content to display at the trailing edge of the row.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Custom information you want to store with the message list item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="discussion"></a>

## Discussion

Store any app-specific data for the item in this property. For example, store the unique ID of the conversation or contact object. The item maintains a strong reference to the object you specify.

## See Also

### Configuring additional details

- [leadingConfiguration](leadingconfiguration.md): Additional content to display at the leading edge of the row.
- [trailingConfiguration](trailingconfiguration.md): Additional content to display at the trailing edge of the row.
