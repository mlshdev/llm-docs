> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/permanentlink](https://developer.apple.com/documentation/appkit/nssharingservice/permanentlink)

# permanentLink (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A permanent URL (permalink) that your app can use to access the post.

## Declaration

```swift
var permanentLink: URL? { get }
```

## See Also

### Getting the Shared Items

- [attachmentFileURLs](attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [messageBody](messagebody.md): The message body as a string.

# permanentLink (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A permanent URL (permalink) that your app can use to access the post.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * permanentLink;
```

## See Also

### Getting the Shared Items

- [attachmentFileURLs](attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [messageBody](messagebody.md): The message body as a string.
