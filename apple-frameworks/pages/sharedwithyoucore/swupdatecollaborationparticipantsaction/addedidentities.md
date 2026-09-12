> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction/addedidentities](https://developer.apple.com/documentation/sharedwithyoucore/swupdatecollaborationparticipantsaction/addedidentities)

# addedIdentities (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of added identities in a collaboration.

## Declaration

```swift
var addedIdentities: [SWPerson.Identity] { get }
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing action attributes

- [collaborationMetadata](collaborationmetadata.md): An object for conveying data during a collaboration.
- [removedIdentities](removedidentities.md): An array of removed identities in a collaboration.

# addedIdentities (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of added identities in a collaboration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<SWPersonIdentity *> * addedIdentities;
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing action attributes

- [collaborationMetadata](collaborationmetadata.md): An object for conveying data during a collaboration.
- [removedIdentities](removedidentities.md): An array of removed identities in a collaboration.
