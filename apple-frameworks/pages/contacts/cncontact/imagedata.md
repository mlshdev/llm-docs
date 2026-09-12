> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/imagedata](https://developer.apple.com/documentation/contacts/cncontact/imagedata)

# imageData (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The profile picture of a contact.

## Declaration

```swift
var imageData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile picture.

## See Also

### Getting Contact Images

- [thumbnailImageData](thumbnailimagedata.md): The thumbnail version of the contact’s profile picture.
- [imageDataAvailable](imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.

# imageData (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The profile picture of a contact.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * imageData;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSData * imageData;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile picture.

## See Also

### Getting Contact Images

- [thumbnailImageData](thumbnailimagedata.md): The thumbnail version of the contact’s profile picture.
- [imageDataAvailable](imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.
