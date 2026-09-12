> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waendpoint/hash(into:)](https://developer.apple.com/documentation/wifiaware/waendpoint/hash(into:))

# hash(into:)

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Compute unique hash of this object.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to combine the properties into.

## See Also

### Hashing and comparing

- [==(\_:\_:)](==%28____%29.md): Two endpoints are logically equivalent if they have the same service type (publish vs subscribe) with the same name, and refer to the same device.
