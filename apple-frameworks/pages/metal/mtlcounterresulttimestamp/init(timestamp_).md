> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcounterresulttimestamp/init(timestamp:)

# init(timestamp:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a timestamp result from a value.

## Declaration

```swift
init(timestamp: UInt64)
```

## Parameters

- `timestamp`: A timestamp value from a counter sample buffer.

<a id="discussion"></a>

## Discussion

Metal creates [MTLCounterResultTimestamp](../mtlcounterresulttimestamp.md) instances for you when you resolve the counter set’s data (see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)). There’s no reason for you to manually create one in your app.

## See Also

### Swift support

- [init()](init%28%29.md): Creates a default timestamp result.
