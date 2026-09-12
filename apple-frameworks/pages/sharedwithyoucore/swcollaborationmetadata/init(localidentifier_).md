> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata/init(localidentifier:)](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/init(localidentifier:))

# init(localIdentifier:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration metadata object for the specified local identifier.

## Declaration

```swift
init(localIdentifier: SWLocalCollaborationIdentifier)
```

## Parameters

- `localIdentifier`: A locally unique identifier for the item this metadata represents.

## See Also

### Creating collaboration metadata

- [init(collaborationIdentifier:)](init%28collaborationidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified global identifier.

# initWithLocalIdentifier: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a collaboration metadata object for the specified local identifier.

## Declaration

```objectivec
- (instancetype) initWithLocalIdentifier:(SWLocalCollaborationIdentifier) localIdentifier;
```

## Parameters

- `localIdentifier`: A locally unique identifier for the item this metadata represents.

## See Also

### Creating collaboration metadata

- [initWithCollaborationIdentifier:](init%28collaborationidentifier_%29.md): Creates and initializes a collaboration metadata object for the specified global identifier.
