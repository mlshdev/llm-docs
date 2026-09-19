> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservice/attachmentfileurls

# attachmentFileURLs (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of NSURL objects representing the files that were shared.

## Declaration

```swift
var attachmentFileURLs: [URL]? { get }
```

## See Also

### Getting the Shared Items

- [messageBody](messagebody.md): The message body as a string.
- [permanentLink](permanentlink.md): A permanent URL (permalink) that your app can use to access the post.

# attachmentFileURLs (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array of NSURL objects representing the files that were shared.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSURL *> * attachmentFileURLs;
```

## See Also

### Getting the Shared Items

- [messageBody](messagebody.md): The message body as a string.
- [permanentLink](permanentlink.md): A permanent URL (permalink) that your app can use to access the post.
