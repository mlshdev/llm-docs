> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/thumbnailimagedata](https://developer.apple.com/documentation/contacts/cncontact/thumbnailimagedata)

# thumbnailImageData (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The thumbnail version of the contact’s profile picture.

## Declaration

```swift
var thumbnailImageData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The [thumbnailImageData](thumbnailimagedata.md) property is derived from the [imageData](imagedata.md) property, including cropping information from vCards or edits from contact viewing. It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile thumbnail picture.

## See Also

### Getting Contact Images

- [imageData](imagedata.md): The profile picture of a contact.
- [imageDataAvailable](imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.

# thumbnailImageData (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The thumbnail version of the contact’s profile picture.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSData * thumbnailImageData;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSData * thumbnailImageData;
```

<a id="Discussion"></a>

## Discussion

The [thumbnailImageData](thumbnailimagedata.md) property is derived from the [imageData](imagedata.md) property, including cropping information from vCards or edits from contact viewing. It is recommended that you fetch this property only when you need to access its value, such as when you need to display the contact’s profile thumbnail picture.

## See Also

### Getting Contact Images

- [imageData](imagedata.md): The profile picture of a contact.
- [imageDataAvailable](imagedataavailable.md): A Boolean indicating whether a contact has a profile picture.
