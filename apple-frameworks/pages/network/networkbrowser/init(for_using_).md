> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkbrowser/init(for:using:)

# init(for:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a browser that will browse for the service specified by a BrowserProvider, with parameters.

## Declaration

```swift
init(for provider: Provider, using parameters: NWParameters? = nil)
```

## Parameters

- `provider`: A BrowserProvider that describes the kind of service to browse for, the browse descriptor, and parameter configuration.
- `parameters`: The parameters that will be used while browsing.
