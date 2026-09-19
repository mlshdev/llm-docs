> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/connectedclients

# connectedClients (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of connected clients.

## Declaration

```swift
var connectedClients: [CMIOExtensionClient] { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Managing Clients

- [notifyPropertiesChanged(\_:)](notifypropertieschanged%28__%29.md): Notifies connected clients of device property changes.

# connectedClients (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of connected clients.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSArray<CMIOExtensionClient *> * connectedClients;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Managing Clients

- [notifyPropertiesChanged:](notifypropertieschanged%28__%29.md): Notifies connected clients of device property changes.
