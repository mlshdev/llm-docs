> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/detectmetadatafortypes:completionhandler:](https://developer.apple.com/documentation/appkit/nspasteboarditem/detectmetadatafortypes:completionhandler:)

# detectMetadataForTypes:completionHandler:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.

## Declaration

```objectivec
- (void) detectMetadataForTypes:(NSSet<NSString *> *) types completionHandler:(void (^)(NSDictionary<NSString *,id> *detectedMetadata, NSError *error)) completionHandler;
```

## Parameters

- `types`: The metadata types to detect on the pasteboard item.
- `completionHandler`: A block the system invokes after detecting metadata on the pasteboard item. The block receives either a dictionary with the metadata types the system finds on the pasteboard item or an error if detection fails. The dictionary keys specify the matched metadata types, and the values specify the corresponding metadata.

<a id="discussion"></a>

## Discussion

This method only gives access to limited types of metadata and doesn’t allow the app to access the contents. As a result, the system doesn’t notify the person using the app about reading the contents of the pasteboard.

For details about the metadata returned for each type, see [NSPasteboardMetadataType](../nspasteboardmetadatatype.md).

The following example shows how to iterate over each pasteboard item and, if the item is a URL that points to a file, get its content type with this method:

```obj-c
NSArray<NSPasteboardItem*> *items = NSPasteboard.generalPasteboard.pasteboardItems;
__block NSUInteger idx = 0;
for (NSPasteboardItem *item in items) {
    NSUInteger itemIndex = idx++;
    [item
     detectMetadataForTypes:[NSSet setWithArray:@[NSPasteboardMetadataTypeContentType]]
     completionHandler:^(NSDictionary<NSPasteboardMetadataType, id> *metadata, NSError *error) {
        if (error) {
            NSLog(@"Item %lu - Error: %@", itemIndex, error);
            return;
        }
        UTType *contentType = (UTType*)metadata[NSPasteboardMetadataTypeContentType];
        if (contentType) {
            NSLog(@"Item %lu - Content type is: %@", itemIndex, contentType.identifier);
        } else {
            NSLog(@"Item %lu - Couldn't get content type", itemIndex);
        }
    }];
}
```

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](detectpatternsforpatterns_completionhandler_.md): Determines whether this pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectValuesForPatterns:completionHandler:](detectvaluesforpatterns_completionhandler_.md): Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.
