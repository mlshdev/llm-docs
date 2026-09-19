> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/hash/matches(address:)

# matches(address:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

`true` if the provided MAC address matches this hash, `false` otherwise.

## Declaration

```swift
func matches(address: WIMACAddress) -> Bool
```

## Parameters

- `address`: The MAC Address to compare against.

<a id="return-value"></a>

## Return Value

`true` if the provided MAC address matches this hash, `false` otherwise.
