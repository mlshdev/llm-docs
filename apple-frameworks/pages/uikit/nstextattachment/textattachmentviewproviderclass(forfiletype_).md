> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachment/textattachmentviewproviderclass(forfiletype:)](https://developer.apple.com/documentation/uikit/nstextattachment/textattachmentviewproviderclass(forfiletype:))

# textAttachmentViewProviderClass(forFileType:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text attachment view provider class, if any, for the file type you specify.

## Declaration

```swift
class func textAttachmentViewProviderClass(forFileType fileType: String) -> AnyClass?
```

## Parameters

- `fileType`: A [String](https://developer.apple.com/documentation/swift/string) that represents the file type.

<a id="return-value"></a>

## Return Value

The text attachment view provider class, or `nil` if the there is no class for the specified file type.

## See Also

### Convenience methods

- [registerViewProviderClass(\_:forFileType:)](registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.

# textAttachmentViewProviderClassForFileType: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text attachment view provider class, if any, for the file type you specify.

## Declaration

```objectivec
+ (Class) textAttachmentViewProviderClassForFileType:(NSString *) fileType;
```

## Parameters

- `fileType`: A [String](https://developer.apple.com/documentation/swift/string) that represents the file type.

<a id="return-value"></a>

## Return Value

The text attachment view provider class, or `nil` if the there is no class for the specified file type.

## See Also

### Convenience methods

- [registerTextAttachmentViewProviderClass:forFileType:](registerviewproviderclass%28__forfiletype_%29.md): Registers a specific file type with the attachment view provider.
