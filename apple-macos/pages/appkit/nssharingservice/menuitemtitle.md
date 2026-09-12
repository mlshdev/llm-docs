> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/menuitemtitle](https://developer.apple.com/documentation/appkit/nssharingservice/menuitemtitle)

# menuItemTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The title of the service in the Share menu.

## Declaration

```swift
var menuItemTitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this title is the same as the value of the [title](title.md) property. Your app can modify this value.

## See Also

### Configuring the Service

- [recipients](recipients.md): An array containing the user handles of the desired recipients.
- [subject](subject.md): The subject of the post.

# menuItemTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The title of the service in the Share menu.

## Declaration

```objectivec
@property (copy) NSString * menuItemTitle;
```

<a id="Discussion"></a>

## Discussion

By default, this title is the same as the value of the [title](title.md) property. Your app can modify this value.

## See Also

### Configuring the Service

- [recipients](recipients.md): An array containing the user handles of the desired recipients.
- [subject](subject.md): The subject of the post.
