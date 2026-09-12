> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/disconnecthandler](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/disconnecthandler)

# disconnectHandler (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The block to be executed when the port disconnects.

## Declaration

```swift
var disconnectHandler: (((any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

An optional block to be invoked when the port disconnects, taking an optional error that indicates if the disconnection was caused by an error.

# disconnectHandler (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The block to be executed when the port disconnects.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^disconnectHandler)(NSError *error);
```

<a id="discussion"></a>

## Discussion

An optional block to be invoked when the port disconnects, taking an optional error that indicates if the disconnection was caused by an error.
