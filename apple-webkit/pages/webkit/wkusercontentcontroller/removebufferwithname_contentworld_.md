> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/removebufferwithname:contentworld:](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/removebufferwithname:contentworld:)

# removeBufferWithName:contentWorld:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) removeBufferWithName:(NSString *) name contentWorld:(WKContentWorld *) world;
```

## Parameters

- `name`: The name of the buffer to remove.

<a id="discussion"></a>

## Discussion

Removes a previously added data buffer from the given \`WKContentWorld
