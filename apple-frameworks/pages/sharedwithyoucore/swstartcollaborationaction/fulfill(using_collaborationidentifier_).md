> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swstartcollaborationaction/fulfill(using:collaborationidentifier:)

# fulfill(using:collaborationIdentifier:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Informs an app to set up the universal link and device independent identifier to provide to the system.

## Declaration

```swift
func fulfill(using url: URL, collaborationIdentifier: SWCollaborationIdentifier)
```

## Parameters

- `url`: The universal link to give to the system.
- `collaborationIdentifier`: The [SWCollaborationIdentifier](../swcollaborationidentifier.md) to give to the system.

# fulfillUsingURL:collaborationIdentifier: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Informs an app to set up the universal link and device independent identifier to provide to the system.

## Declaration

```objectivec
- (void) fulfillUsingURL:(NSURL *) url collaborationIdentifier:(SWCollaborationIdentifier) collaborationIdentifier;
```

## Parameters

- `url`: The universal link to give to the system.
- `collaborationIdentifier`: The [SWCollaborationIdentifier](../swcollaborationidentifier.md) to give to the system.
