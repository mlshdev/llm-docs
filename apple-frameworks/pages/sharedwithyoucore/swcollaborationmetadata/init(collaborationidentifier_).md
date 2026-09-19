> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/init(collaborationidentifier:)

# init(collaborationIdentifier:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration metadata object for the specified global identifier.

## Declaration

```swift
init(collaborationIdentifier: SWCollaborationIdentifier)
```

## Parameters

- `collaborationIdentifier`: A globally unique identifier for the item this metadata represents.

## See Also

### Creating collaboration metadata

- [init(localIdentifier:)](init%28localidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified local identifier.

# initWithCollaborationIdentifier: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration metadata object for the specified global identifier.

## Declaration

```objectivec
- (instancetype) initWithCollaborationIdentifier:(SWCollaborationIdentifier) collaborationIdentifier;
```

## Parameters

- `collaborationIdentifier`: A globally unique identifier for the item this metadata represents.

## See Also

### Creating collaboration metadata

- [initWithLocalIdentifier:](init%28localidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified local identifier.
