> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvalueobservingcustomization](https://developer.apple.com/documentation/foundation/nskeyvalueobservingcustomization)

# NSKeyValueObservingCustomization

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Conforming to NSKeyValueObservingCustomization is not required to use Key-Value Observing. Provide an implementation of these functions if you need to disable auto-notifying for a key, or add dependent keys

## Declaration

```swift
protocol NSKeyValueObservingCustomization : NSObjectProtocol
```

## Topics

### Type Methods

- [automaticallyNotifiesObservers(for:)](nskeyvalueobservingcustomization/automaticallynotifiesobservers%28for_%29.md)
- [keyPathsAffectingValue(for:)](nskeyvalueobservingcustomization/keypathsaffectingvalue%28for_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Protocols

- [DiscreteFormatStyle](discreteformatstyle.md): A format style that transforms a continuous input into a discrete output and provides information about its discretization boundaries.
