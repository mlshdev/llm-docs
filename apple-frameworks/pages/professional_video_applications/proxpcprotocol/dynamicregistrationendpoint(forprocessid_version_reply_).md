> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/proxpcprotocol/dynamicregistrationendpoint(forprocessid:version:reply:)](https://developer.apple.com/documentation/professional_video_applications/proxpcprotocol/dynamicregistrationendpoint(forprocessid:version:reply:))

# dynamicRegistrationEndpoint(forProcessID:version:reply:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

## Declaration

```swift
func dynamicRegistrationEndpoint(forProcessID processID: pid_t, version: Int, reply: ((NSXPCListenerEndpoint?, (any Error)?) -> Void)!)
```

```swift
func dynamicRegistrationEndpoint(forProcessID processID: pid_t, version: Int) async throws -> NSXPCListenerEndpoint?
```

<a id="discussion"></a>

## Discussion

Obtains the NSXPCListenerEndpoint for dynamic registration.

The host application automatically calls this so plug-ins should not call it.

# dynamicRegistrationEndpointForProcessID:version:reply: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

## Declaration

```objectivec
- (void) dynamicRegistrationEndpointForProcessID:(pid_t) processID version:(NSInteger) version reply:(void (^)(NSXPCListenerEndpoint * , NSError * )) reply;
```

<a id="discussion"></a>

## Discussion

Obtains the NSXPCListenerEndpoint for dynamic registration.

The host application automatically calls this so plug-ins should not call it.
