> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresulttimestamp/init()](https://developer.apple.com/documentation/metal/mtlcounterresulttimestamp/init())

# init()

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a default timestamp result.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Metal creates [MTLCounterResultTimestamp](../mtlcounterresulttimestamp.md) instances for you when you resolve the counter set’s data (see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)). There’s no reason for you to manually create one in your app.

## See Also

### Swift support

- [init(timestamp:)](init%28timestamp_%29.md): Creates a timestamp result from a value.
