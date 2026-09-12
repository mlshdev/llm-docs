> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxxpcprotocol/viewservicelistenerendpoint(_:)](https://developer.apple.com/documentation/professional_video_applications/fxxpcprotocol/viewservicelistenerendpoint(_:))

# viewServiceListenerEndPoint(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

## Declaration

```swift
func viewServiceListenerEndPoint(_ reply: ((NSXPCListenerEndpoint?) -> Void)!)
```

```swift
func viewServiceListenerEndPoint() async -> NSXPCListenerEndpoint?
```

<a id="discussion"></a>

## Discussion

Obtains the NSXPCListenerEndpoint for ViewBridge to communicate with custom views.

The host application automatically calls this so plug-ins should not call it.

# viewServiceListenerEndPoint: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

## Declaration

```objectivec
- (void) viewServiceListenerEndPoint:(void (^)(NSXPCListenerEndpoint * )) reply;
```

<a id="discussion"></a>

## Discussion

Obtains the NSXPCListenerEndpoint for ViewBridge to communicate with custom views.

The host application automatically calls this so plug-ins should not call it.
