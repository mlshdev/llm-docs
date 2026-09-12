> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxxpcprotocol/createnewconnection(forprocessid:minimumversion:maximumversion:hostcapabilities:reply:)](https://developer.apple.com/documentation/professional_video_applications/fxxpcprotocol/createnewconnection(forprocessid:minimumversion:maximumversion:hostcapabilities:reply:))

# createNewConnection(forProcessID:minimumVersion:maximumVersion:hostCapabilities:reply:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

## Declaration

```swift
func createNewConnection(forProcessID processID: pid_t, minimumVersion minVers: Int, maximumVersion maxVers: Int, hostCapabilities remoteCapabilities: [AnyHashable : Any]!, reply: ((NSXPCListenerEndpoint?, (any Error)?) -> Void)!)
```

```swift
func createNewConnection(forProcessID processID: pid_t, minimumVersion minVers: Int, maximumVersion maxVers: Int, hostCapabilities remoteCapabilities: [AnyHashable : Any]!) async throws -> NSXPCListenerEndpoint?
```

<a id="discussion"></a>

## Discussion

Accepts a connection from the host application.

The host application automatically calls this so plug-ins should not call it.

# createNewConnectionForProcessID:minimumVersion:maximumVersion:hostCapabilities:reply: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

## Declaration

```objectivec
- (void) createNewConnectionForProcessID:(pid_t) processID minimumVersion:(NSUInteger) minVers maximumVersion:(NSUInteger) maxVers hostCapabilities:(NSDictionary *) remoteCapabilities reply:(void (^)(NSXPCListenerEndpoint * , NSError * )) reply;
```

<a id="discussion"></a>

## Discussion

Accepts a connection from the host application.

The host application automatically calls this so plug-ins should not call it.
