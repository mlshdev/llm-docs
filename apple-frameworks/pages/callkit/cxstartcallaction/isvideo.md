> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction/isvideo](https://developer.apple.com/documentation/callkit/cxstartcallaction/isvideo)

# isVideo (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is a video call.

## Declaration

```swift
var isVideo: Bool { get set }
```

## See Also

### Accessing Action Attributes

- [contactIdentifier](contactidentifier.md): The identifier for the call recipient.
- [handle](handle.md): The handle of the call recipient.

# video (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call is a video call.

## Declaration

```objectivec
@property (nonatomic, getter=isVideo) BOOL video;
```

## See Also

### Accessing Action Attributes

- [contactIdentifier](contactidentifier.md): The identifier for the call recipient.
- [handle](handle.md): The handle of the call recipient.
