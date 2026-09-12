> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderdelegate/providerdidreset(_:)](https://developer.apple.com/documentation/callkit/cxproviderdelegate/providerdidreset(_:))

# providerDidReset(\_:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider is reset.

## Declaration

```swift
func providerDidReset(_ provider: CXProvider)
```

## Parameters

- `provider`: The telephony provider.

## See Also

### Handling Provider Events

- [providerDidBegin(\_:)](providerdidbegin%28__%29.md): Called when the provider begins.

# providerDidReset: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider is reset.

## Declaration

```objectivec
- (void) providerDidReset:(CXProvider *) provider;
```

## Parameters

- `provider`: The telephony provider.

## See Also

### Handling Provider Events

- [providerDidBegin:](providerdidbegin%28__%29.md): Called when the provider begins.
