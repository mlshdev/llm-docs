> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/messagehandler](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/messagehandler)

# messageHandler (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The block to be executed when a message is received from the web extension.

## Declaration

```swift
var messageHandler: ((Any?, (any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

An optional block to be invoked when a message is received, taking two parameters: the message and an optional error.

# messageHandler (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The block to be executed when a message is received from the web extension.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^messageHandler)(id message, NSError *error);
```

<a id="discussion"></a>

## Discussion

An optional block to be invoked when a message is received, taking two parameters: the message and an optional error.
