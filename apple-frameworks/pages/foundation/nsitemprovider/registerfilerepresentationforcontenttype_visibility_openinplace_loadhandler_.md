> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerfilerepresentationforcontenttype:visibility:openinplace:loadhandler:](https://developer.apple.com/documentation/foundation/nsitemprovider/registerfilerepresentationforcontenttype:visibility:openinplace:loadhandler:)

# registerFileRepresentationForContentType:visibility:openInPlace:loadHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

## Declaration

```objectivec
- (void) registerFileRepresentationForContentType:(UTType *) contentType visibility:(NSItemProviderRepresentationVisibility) visibility openInPlace:(BOOL) openInPlace loadHandler:(NSProgress * (^)(void (^completionHandler)(NSURL *fileURL, BOOL coordinated, NSError *error))) loadHandler;
```

## See Also

### Registering files

- [registerFileRepresentationForTypeIdentifier:fileOptions:visibility:loadHandler:](registerfilerepresentation%28fortypeidentifier_fileoptions_visibility_loadhandler_%29.md): Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.
