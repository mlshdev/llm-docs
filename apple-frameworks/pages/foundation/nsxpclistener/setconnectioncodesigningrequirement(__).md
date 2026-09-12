> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/setconnectioncodesigningrequirement(_:)](https://developer.apple.com/documentation/foundation/nsxpclistener/setconnectioncodesigningrequirement(_:))

# setConnectionCodeSigningRequirement(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Sets the code signing requirement for connections to this listener.

## Declaration

```swift
func setConnectionCodeSigningRequirement(_ requirement: String)
```

## Parameters

- `requirement`: A string that describes requirements expected of the connection peer. See [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/) for more information on the code signing format.

<a id="Discussion"></a>

## Discussion

Use this method to enforce a code-signing requirement on incoming XPC connections.

The following example shows how a listener can ensure that the XPC client service on the other end of a connection has a specific entitlement.

**Swift**

```swift
func listener(_ listener: NSXPCListener,
                      shouldAcceptNewConnection newConnection: NSXPCConnection) -> Bool {
    newConnection.exportedObject = MyExportedObject()
    newConnection.exportedInterface = NSXPCInterface(with: MyExportedObjectProtocol.self)
    newConnection.setCodeSigningRequirement("entitlement [com.example.testentitlement] exists")
    newConnection.resume()
    return true
}
```

**Objective-C**

```objc
- (BOOL)listener:(NSXPCListener *)listener shouldAcceptNewConnection:(NSXPCConnection *)newConnection {
    MyExportedObject *e = [[MyExportedObject new] autorelease];
    newConnection.exportedObject = e;
    newConnection.exportedInterface = [NSXPCInterface interfaceWithProtocol:@protocol(MyExportedObjectProtocol)];
    
    // This is an entitlement that must exist on the incoming connection's app signature
    [newConnection setCodeSigningRequirement:@"entitlement [com.example.testentitlement] exists"];
    [newConnection resume];

    return YES;
}
```

# setConnectionCodeSigningRequirement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Sets the code signing requirement for connections to this listener.

## Declaration

```objectivec
- (void) setConnectionCodeSigningRequirement:(NSString *) requirement;
```

## Parameters

- `requirement`: A string that describes requirements expected of the connection peer. See [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/) for more information on the code signing format.

<a id="Discussion"></a>

## Discussion

Use this method to enforce a code-signing requirement on incoming XPC connections.

The following example shows how a listener can ensure that the XPC client service on the other end of a connection has a specific entitlement.

**Swift**

```swift
func listener(_ listener: NSXPCListener,
                      shouldAcceptNewConnection newConnection: NSXPCConnection) -> Bool {
    newConnection.exportedObject = MyExportedObject()
    newConnection.exportedInterface = NSXPCInterface(with: MyExportedObjectProtocol.self)
    newConnection.setCodeSigningRequirement("entitlement [com.example.testentitlement] exists")
    newConnection.resume()
    return true
}
```

**Objective-C**

```objc
- (BOOL)listener:(NSXPCListener *)listener shouldAcceptNewConnection:(NSXPCConnection *)newConnection {
    MyExportedObject *e = [[MyExportedObject new] autorelease];
    newConnection.exportedObject = e;
    newConnection.exportedInterface = [NSXPCInterface interfaceWithProtocol:@protocol(MyExportedObjectProtocol)];
    
    // This is an entitlement that must exist on the incoming connection's app signature
    [newConnection setCodeSigningRequirement:@"entitlement [com.example.testentitlement] exists"];
    [newConnection resume];

    return YES;
}
```
