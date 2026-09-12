> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/init(handle:identity:displayname:thumbnailimagedata:)](https://developer.apple.com/documentation/sharedwithyoucore/swperson/init(handle:identity:displayname:thumbnailimagedata:))

# init(handle:identity:displayName:thumbnailImageData:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a person object.

## Declaration

```swift
init(handle: String?, identity: SWPerson.Identity?, displayName: String, thumbnailImageData: Data?)
```

## Parameters

- `handle`: The phone number or email address for this person.
- `identity`: The identity of this person.
- `displayName`: The name of this person.
- `thumbnailImageData`: The thumbnail image data for this person. If `nil`, this will be inferred by the system.

# initWithHandle:identity:displayName:thumbnailImageData: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and initializes a person object.

## Declaration

```objectivec
- (instancetype) initWithHandle:(NSString *) handle identity:(SWPersonIdentity *) identity displayName:(NSString *) displayName thumbnailImageData:(NSData *) thumbnailImageData;
```

## Parameters

- `handle`: The phone number or email address for this person.
- `identity`: The identity of this person.
- `displayName`: The name of this person.
- `thumbnailImageData`: The thumbnail image data for this person. If `nil`, this will be inferred by the system.
