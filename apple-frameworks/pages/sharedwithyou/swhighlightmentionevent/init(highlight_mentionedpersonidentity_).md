> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightmentionevent/init(highlight:mentionedpersonidentity:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightmentionevent/init(highlight:mentionedpersonidentity:))

# init(highlight:mentionedPersonIdentity:) (Swift)

**Framework:** Shared with You  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a mention event.

## Declaration

```swift
init(highlight: SWHighlight, mentionedPersonIdentity identity: SWPerson.Identity)
```

## Parameters

- `highlight`: The related hightlight for the event.
- `identity`: The `SWPersonIdentity` of the person the sender mentions.

## See Also

### Creating a mention event

- [init(highlight:mentionedPersonCloudKitShareHandle:)](init%28highlight_mentionedpersoncloudkitsharehandle_%29.md): Creates and initializes a mention event.

# initWithHighlight:mentionedPersonIdentity: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a mention event.

## Declaration

```objectivec
- (instancetype) initWithHighlight:(SWHighlight *) highlight mentionedPersonIdentity:(SWPersonIdentity *) identity;
```

## Parameters

- `highlight`: The related hightlight for the event.
- `identity`: The `SWPersonIdentity` of the person the sender mentions.

## See Also

### Creating a mention event

- [initWithHighlight:mentionedPersonCloudKitShareHandle:](init%28highlight_mentionedpersoncloudkitsharehandle_%29.md): Creates and initializes a mention event.
