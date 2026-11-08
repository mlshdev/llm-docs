> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesession/sessionid

# sessionID

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 27.0+

A unique identifier for a feature on the paired accessory.

## Declaration

```swift
var sessionID: UUID { get }
```

<a id="discussion"></a>

## Discussion

This value matches the [sessionID](../transportmessage/sessionid.md) of the messages that your transport extension receives for the feature. The system uses it for cryptographic operations and persists the value until the accessory unpairs.

## Default Implementations

### AccessoryFeatureSession Implementations

- [sessionID](sessionid-1qpen.md): A unique identifier for a feature on the paired accessory.

## See Also

### Accessing the session

- [accessory](accessory.md): A reference to the accessory to which the session communicates.
