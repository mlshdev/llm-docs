> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightmentionevent/init(highlight:mentionedpersoncloudkitsharehandle:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightmentionevent/init(highlight:mentionedpersoncloudkitsharehandle:))

# init(highlight:mentionedPersonCloudKitShareHandle:) (Swift)

**Framework:** Shared with You  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a mention event.

## Declaration

```swift
init(highlight: SWHighlight, mentionedPersonCloudKitShareHandle handle: String)
```

## Parameters

- `highlight`: The related hightlight for the event.
- `handle`: The CloudKit handle of the person the sender mentions.

## See Also

### Creating a mention event

- [init(highlight:mentionedPersonIdentity:)](init%28highlight_mentionedpersonidentity_%29.md): Creates and initializes a mention event.

# initWithHighlight:mentionedPersonCloudKitShareHandle: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a mention event.

## Declaration

```objectivec
- (instancetype) initWithHighlight:(SWHighlight *) highlight mentionedPersonCloudKitShareHandle:(NSString *) handle;
```

## Parameters

- `highlight`: The related hightlight for the event.
- `handle`: The CloudKit handle of the person the sender mentions.

## See Also

### Creating a mention event

- [initWithHighlight:mentionedPersonIdentity:](init%28highlight_mentionedpersonidentity_%29.md): Creates and initializes a mention event.
