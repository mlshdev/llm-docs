> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction/removedidentities](https://developer.apple.com/documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction/removedidentities)

# removedIdentities (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of removed identities in a collaboration.

## Declaration

```swift
var removedIdentities: [SWPerson.Identity] { get }
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing action attributes

- [collaborationMetadata](collaborationmetadata.md): An object for conveying data during a collaboration.
- [addedIdentities](addedidentities.md): An array of added identities in a collaboration.

# removedIdentities (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of removed identities in a collaboration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SWPersonIdentity *> * removedIdentities;
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing action attributes

- [collaborationMetadata](collaborationmetadata.md): An object for conveying data during a collaboration.
- [addedIdentities](addedidentities.md): An array of added identities in a collaboration.
