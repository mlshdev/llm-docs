> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesession

# AccessoryFeatureSession

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

## Declaration

```swift
protocol AccessoryFeatureSession : Sendable
```

## Topics

### Instance Properties

- [accessory](accessoryfeaturesession/accessory.md): The accessory associated with this feature session.
- [sessionID](accessoryfeaturesession/sessionid.md): The session identifier for this capability session.

### Instance Methods

- [send(message:)](accessoryfeaturesession/send%28message_%29.md): Send a message to the Transport Extension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
