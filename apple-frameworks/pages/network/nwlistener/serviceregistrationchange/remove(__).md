> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwlistener/serviceregistrationchange/remove(_:)

# NWListener.ServiceRegistrationChange.remove(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The service is no longer advertising a specific endpoint.

## Declaration

```swift
case remove(NWEndpoint)
```

## See Also

### Changes

- [NWListener.ServiceRegistrationChange.add(\_:)](add%28__%29.md): The service is now advertising a new endpoint.
