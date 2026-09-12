> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/nsattributedstringcompletionhandler](https://developer.apple.com/documentation/webkit/nsattributedstringcompletionhandler)

# NSAttributedStringCompletionHandler

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

## Declaration

```objectivec
typedef void (^)(NSAttributedString *, NSDictionary<NSString *,id> *, NSError *) NSAttributedStringCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

Document-Level attributes, like NSBackgroundColorDocumentAttribute, or an error. An implementation of this block type must expect to be called asynchronously when passed to HTML loading methods.
