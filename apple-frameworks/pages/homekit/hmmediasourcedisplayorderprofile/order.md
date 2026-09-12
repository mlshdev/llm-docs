> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmediasourcedisplayorderprofile/order](https://developer.apple.com/documentation/homekit/hmmediasourcedisplayorderprofile/order)

# order

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The display order of input media sources.

## Declaration

```swift
var order: [Int] { get }
```

<a id="discussion"></a>

## Discussion

Provides an ordered list of [HMCharacteristicTypeIdentifier](../hmcharacteristictypeidentifier.md) values for [HMServiceTypeInputSource](../hmservicetypeinputsource.md) services associated with the profile.

## See Also

### Managing input source order

- [writeOrder(\_:)](writeorder%28__%29.md): Writes the display order of the media sources to the accessory.
- [delegate](delegate-swift.property.md): The property that handles updates to the display order.
- [canModifyOrder](canmodifyorder.md): A Boolean that indicates if the display order of the input media sources can be modified.
- [HMMediaSourceDisplayOrderProfile.Delegate](delegate-swift.protocol.md): The protocol through which a delegate receives updates on the order of input media sources.
