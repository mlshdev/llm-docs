> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesession/send(data:)

# send(data:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Sends data to the data provider extension.

## Declaration

```swift
func send(data: Data) async throws
```

## Parameters

- `data`: The data to send.

<a id="discussion"></a>

## Discussion

Your app defines the data format. Send data only after the system calls [sessionStarted(\_:)](../accessoryfeatureruntimesessionhandler/sessionstarted%28__%29.md).

## Default Implementations

### AccessoryFeatureRuntimeSession Implementations

- [send(data:)](send%28data_%29-ut41.md): Beta.
