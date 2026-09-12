> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata/init(collaborationidentifier:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/init(collaborationidentifier:))

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
