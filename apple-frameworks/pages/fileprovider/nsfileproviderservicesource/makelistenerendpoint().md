> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderservicesource/makelistenerendpoint()](https://developer.apple.com/documentation/fileprovider/nsfileproviderservicesource/makelistenerendpoint())

# makeListenerEndpoint() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns an endpoint object that lets the host app communicate with the File Provider extension.

## Declaration

```swift
func makeListenerEndpoint() throws -> NSXPCListenerEndpoint
```

## See Also

### Accessing the Service

- [serviceName](servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [isRestricted](isrestricted.md)

# makeListenerEndpointAndReturnError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

Returns an endpoint object that lets the host app communicate with the File Provider extension.

## Declaration

```objectivec
- (NSXPCListenerEndpoint *) makeListenerEndpointAndReturnError:(NSError **) error;
```

## See Also

### Accessing the Service

- [serviceName](servicename.md): A name that uniquely identifies the service (reverse domain name notation is recommended).
- [restricted](isrestricted.md)
