> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachment/url](https://developer.apple.com/documentation/usernotifications/unnotificationattachment/url)

# url (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The URL of the file for this attachment.

## Declaration

```swift
var url: URL { get }
```

<a id="Discussion"></a>

## Discussion

The file at the specified URL is security scoped to your app. Before you access it, call the [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md) method of [NSURL](../../foundation/nsurl.md).

## See Also

### Getting the Attachment Contents

- [identifier](identifier.md): The unique identifier for the attachment.
- [type](type.md): The UTI type of the attachment.

# URL (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The URL of the file for this attachment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSURL * URL;
```

```objectivec
@property (atomic, copy, readonly) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The file at the specified URL is security scoped to your app. Before you access it, call the [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md) method of [NSURL](../../foundation/nsurl.md).

## See Also

### Getting the Attachment Contents

- [identifier](identifier.md): The unique identifier for the attachment.
- [type](type.md): The UTI type of the attachment.
