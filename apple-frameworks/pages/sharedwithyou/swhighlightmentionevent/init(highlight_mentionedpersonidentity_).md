> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swhighlightmentionevent/init(highlight:mentionedpersonidentity:)

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
