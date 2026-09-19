> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservice/messagebody

# messageBody (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The message body as a string.

## Declaration

```swift
var messageBody: String? { get }
```

## See Also

### Getting the Shared Items

- [attachmentFileURLs](attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [permanentLink](permanentlink.md): A permanent URL (permalink) that your app can use to access the post.

# messageBody (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The message body as a string.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * messageBody;
```

## See Also

### Getting the Shared Items

- [attachmentFileURLs](attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [permanentLink](permanentlink.md): A permanent URL (permalink) that your app can use to access the post.
