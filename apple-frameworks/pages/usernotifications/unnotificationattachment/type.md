> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationattachment/type](https://developer.apple.com/documentation/usernotifications/unnotificationattachment/type)

# type (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The UTI type of the attachment.

## Declaration

```swift
var type: String { get }
```

<a id="Discussion"></a>

## Discussion

The system derives the value of this property from the attachment data.

## See Also

### Getting the Attachment Contents

- [identifier](identifier.md): The unique identifier for the attachment.
- [url](url.md): The URL of the file for this attachment.

# type (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The UTI type of the attachment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * type;
```

```objectivec
@property (atomic, copy, readonly) NSString * type;
```

<a id="Discussion"></a>

## Discussion

The system derives the value of this property from the attachment data.

## See Also

### Getting the Attachment Contents

- [identifier](identifier.md): The unique identifier for the attachment.
- [URL](url.md): The URL of the file for this attachment.
