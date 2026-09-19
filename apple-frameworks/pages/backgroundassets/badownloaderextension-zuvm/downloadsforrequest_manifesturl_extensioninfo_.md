> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownloaderextension-zuvm/downloadsforrequest:manifesturl:extensioninfo:

# downloadsForRequest:manifestURL:extensionInfo:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (NSSet<BADownload *> *) downloadsForRequest:(BAContentRequest) contentRequest manifestURL:(NSURL *) manifestURL extensionInfo:(BAAppExtensionInfo *) extensionInfo;
```

## See Also

### Checking for asset updates

- [BAContentRequest](../bacontentrequest.md): A type that indicates the purpose of a content download request.
- [BAAppExtensionInfo](../baappextensioninfo.md)
