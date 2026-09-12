> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitem/init(urlstring:title:lastvisitedtimeinterval:)-5amr](https://developer.apple.com/documentation/webkit/webhistoryitem/init(urlstring:title:lastvisitedtimeinterval:)-5amr)

# init(urlString:title:lastVisitedTimeInterval:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a URL,`URLString`, a title specified by `title` and the last time this item was visited specified by `time` title, and time last visited.

## Declaration

```swift
init!(urlString URLString: String!, title: String!, lastVisitedTimeInterval time: TimeInterval)
```

<a id="Discussion"></a>

## Discussion

WebKit normally creates WebHistoryItem objects for you but on occasion you might want to create an item and add it to the WebBackForwardList yourself. Note that when an instance is first initialized the strings returned by [urlString](urlstring.md) and [originalURLString](originalurlstring.md) are the same.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# initWithURLString:title:lastVisitedTimeInterval: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Initializes the receiver with a URL,`URLString`, a title specified by `title` and the last time this item was visited specified by `time` title, and time last visited.

## Declaration

```objectivec
- (instancetype) initWithURLString:(NSString *) URLString title:(NSString *) title lastVisitedTimeInterval:(NSTimeInterval) time;
```

<a id="Discussion"></a>

## Discussion

WebKit normally creates WebHistoryItem objects for you but on occasion you might want to create an item and add it to the WebBackForwardList yourself. Note that when an instance is first initialized the strings returned by [URLString](urlstring.md) and [originalURLString](originalurlstring.md) are the same.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
