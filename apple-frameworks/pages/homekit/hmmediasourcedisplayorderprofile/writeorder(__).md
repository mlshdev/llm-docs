> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmediasourcedisplayorderprofile/writeorder(_:)](https://developer.apple.com/documentation/homekit/hmmediasourcedisplayorderprofile/writeorder(_:))

# writeOrder(\_:)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Writes the display order of the media sources to the accessory.

## Declaration

```swift
func writeOrder(_ order: [Int]) async throws
```

## Parameters

- `order`: The new display order for the media sources. Provides an ordered list of [HMCharacteristicTypeIdentifier](../hmcharacteristictypeidentifier.md) values for [HMServiceTypeInputSource](../hmservicetypeinputsource.md) services associated with the profile.

<a id="discussion"></a>

## Discussion

An error is thrown if the source ordering fails to be written to the accessory.

## See Also

### Managing input source order

- [delegate](delegate-swift.property.md): The property that handles updates to the display order.
- [order](order.md): The display order of input media sources.
- [canModifyOrder](canmodifyorder.md): A Boolean that indicates if the display order of the input media sources can be modified.
- [HMMediaSourceDisplayOrderProfile.Delegate](delegate-swift.protocol.md): The protocol through which a delegate receives updates on the order of input media sources.
