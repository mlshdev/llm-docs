> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/registerviewproviderclass(_:forfiletype:)](https://developer.apple.com/documentation/appkit/nstextattachment/registerviewproviderclass(_:forfiletype:))

# registerViewProviderClass(\_:forFileType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Registers a specific file type with the attachment view provider.

## Declaration

```swift
class func registerViewProviderClass(_ textAttachmentViewProviderClass: AnyClass, forFileType fileType: String)
```

## Parameters

- `textAttachmentViewProviderClass`: The text attachment view provider class.
- `fileType`: A [String](https://developer.apple.com/documentation/swift/string) that represents the file type.

## See Also

### Convenience methods

- [textAttachmentViewProviderClass(forFileType:)](textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.

# registerTextAttachmentViewProviderClass:forFileType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Registers a specific file type with the attachment view provider.

## Declaration

```objectivec
+ (void) registerTextAttachmentViewProviderClass:(Class) textAttachmentViewProviderClass forFileType:(NSString *) fileType;
```

## Parameters

- `textAttachmentViewProviderClass`: The text attachment view provider class.
- `fileType`: A [String](https://developer.apple.com/documentation/swift/string) that represents the file type.

## See Also

### Convenience methods

- [textAttachmentViewProviderClassForFileType:](textattachmentviewproviderclass%28forfiletype_%29.md): Returns the text attachment view provider class, if any, for the file type you specify.
