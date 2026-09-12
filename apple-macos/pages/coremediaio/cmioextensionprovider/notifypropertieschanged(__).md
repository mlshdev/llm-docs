> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/notifypropertieschanged(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/notifypropertieschanged(_:))

# notifyPropertiesChanged(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies connected clients of device property changes.

## Declaration

```swift
func notifyPropertiesChanged(_ propertyStates: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertyStates`: A dictionary of properties with changes.

## See Also

### Managing Clients

- [connectedClients](connectedclients.md): An array of connected clients.

# notifyPropertiesChanged: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies connected clients of device property changes.

## Declaration

```objectivec
- (void) notifyPropertiesChanged:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertyStates;
```

## Parameters

- `propertyStates`: A dictionary of properties with changes.

## See Also

### Managing Clients

- [connectedClients](connectedclients.md): An array of connected clients.
