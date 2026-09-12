> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction/handle](https://developer.apple.com/documentation/callkit/cxstartcallaction/handle)

# handle (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The handle of the call recipient.

## Declaration

```swift
@NSCopying var handle: CXHandle { get set }
```

## See Also

### Accessing Action Attributes

- [isVideo](isvideo.md): A Boolean value that indicates whether the call is a video call.
- [contactIdentifier](contactidentifier.md): The identifier for the call recipient.

# handle (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The handle of the call recipient.

## Declaration

```objectivec
@property (nonatomic, copy) CXHandle * handle;
```

## See Also

### Accessing Action Attributes

- [video](isvideo.md): A Boolean value that indicates whether the call is a video call.
- [contactIdentifier](contactidentifier.md): The identifier for the call recipient.
