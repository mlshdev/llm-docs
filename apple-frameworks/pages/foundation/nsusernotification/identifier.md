> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotification/identifier](https://developer.apple.com/documentation/foundation/nsusernotification/identifier)

# identifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

A string that uniquely identifies a notification.

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The identifier is unique to a notification. A notification delivered with the same identifier as an existing notification replaces the existing notification rather than causing the display of a new notification.

## See Also

### Display Information

- [title](title.md): Deprecated. Specifies the title of the notification.
- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [response](response.md): Deprecated. The response with which the user responded to a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.

# identifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+ (deprecated in 11.0)

A string that uniquely identifies a notification.

## Declaration

```objectivec
@property (copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The identifier is unique to a notification. A notification delivered with the same identifier as an existing notification replaces the existing notification rather than causing the display of a new notification.

## See Also

### Display Information

- [title](title.md): Deprecated. Specifies the title of the notification.
- [subtitle](subtitle.md): Deprecated. Specifies the subtitle of the notification.
- [informativeText](informativetext.md): Deprecated. The body text of the notification.
- [contentImage](contentimage.md): Deprecated. Image shown in the content of the notification.
- [response](response.md): Deprecated. The response with which the user responded to a notification.
- [responsePlaceholder](responseplaceholder.md): Deprecated. Optional placeholder string for inline reply field.
