> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usernotifications/unnotificationattachment/identifier

# identifier (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique identifier for the attachment.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Getting the Attachment Contents

- [url](url.md): The URL of the file for this attachment.
- [type](type.md): The UTI type of the attachment.

# identifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The unique identifier for the attachment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

## See Also

### Getting the Attachment Contents

- [URL](url.md): The URL of the file for this attachment.
- [type](type.md): The UTI type of the attachment.
