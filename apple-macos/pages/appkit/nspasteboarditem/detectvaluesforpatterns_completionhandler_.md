> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/detectvaluesforpatterns:completionhandler:](https://developer.apple.com/documentation/appkit/nspasteboarditem/detectvaluesforpatterns:completionhandler:)

# detectValuesForPatterns:completionHandler:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.

## Declaration

```objectivec
- (void) detectValuesForPatterns:(NSSet<NSString *> *) patterns completionHandler:(void (^)(NSDictionary<NSString *,id> *detectedValues, NSError *error)) completionHandler;
```

## Parameters

- `patterns`: The patterns to detect on the pasteboard item.
- `completionHandler`: A block the system invokes after detecting patterns on the pasteboard item. The block returns either a dictionary with the patterns the system finds on the pasteboard item or an error if detection fails. The dictionary keys specify the matched patterns, and the values specify the corresponding content of the pasteboard.

<a id="discussion"></a>

## Discussion

For details about the types returned for each pattern, see [NSPasteboardDetectionPattern](../nspasteboarddetectionpattern.md).

The following example shows how to use this method to find web URLs and web search terms in each item on the pasteboard:

```obj-c
NSArray<NSPasteboardItem*> *items = NSPasteboard.generalPasteboard.pasteboardItems;
__block NSUInteger idx = 0;
for (NSPasteboardItem *item in items) {
    NSUInteger itemIndex = idx++;
    [item
     detectValuesForPatterns:[NSSet setWithArray:@[NSPasteboardDetectionPatternProbableWebSearch,
                                                   NSPasteboardDetectionPatternProbableWebURL]]
     completionHandler:^(NSDictionary<NSPasteboardDetectionPattern, id> *patternValues, NSError *error) {
        if (error) {
            NSLog(@"Item %lu: Error: %@", itemIndex, error);
            return;
        }
        NSString *searchString = (NSString*)patternValues[NSPasteboardDetectionPatternProbableWebSearch];
        NSString *urlString = (NSString*)patternValues[NSPasteboardDetectionPatternProbableWebURL] ;
        if (searchString != nil) {
            NSLog(@"Item %lu - Web search retrieved: %@", itemIndex, searchString);
        }
        if (urlString != nil) {
            NSLog(@"Item %lu - Web URL retrieved: %@", itemIndex, urlString);
        }
        if (searchString == nil && urlString == nil) {
            NSLog(@"Item %lu - No web patterns retrieved.", itemIndex);
        }
    }];
}
```

> **Important**

> If the system finds a match when calling this method, the system informs the person using the app that the app is trying to read the contents of the pasteboard. If the person denies access to the pasteboard, the completion handler receives an error.

## See Also

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](detectpatternsforpatterns_completionhandler_.md): Determines whether this pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectMetadataForTypes:completionHandler:](detectmetadatafortypes_completionhandler_.md): Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.
