> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/addbuffer:name:contentworld:](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/addbuffer:name:contentworld:)

# addBuffer:name:contentWorld:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) addBuffer:(NSData *) buffer name:(NSString *) name contentWorld:(WKContentWorld *) world;
```

## Parameters

- `buffer`: The buffer to add.
- `name`: The name of the buffer to be referenced from JavaScript. e.g. with a `name` parameter of `@"mybuffer"`, JavaScript can reference the buffer via `window.webkit.buffers.mybuffer`

<a id="discussion"></a>

## Discussion

Adds a data buffer that will be available to JavaScript through the `window.webkit.buffers` object
