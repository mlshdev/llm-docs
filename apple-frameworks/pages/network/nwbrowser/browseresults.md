> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/browseresults](https://developer.apple.com/documentation/network/nwbrowser/browseresults)

# browseResults

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The list of discovered services.

## Declaration

```swift
final var browseResults: Set<NWBrowser.Result> { get }
```

## See Also

### Browsing for Services

- [init(for:using:)](init%28for_using_%29.md): Initializes a browser with a type of service to discover.
- [NWBrowser.Descriptor](descriptor-swift.enum.md): A service description used to discover Bonjour services.
- [start(queue:)](start%28queue_%29.md): Starts browsing for services, and sets the queue on which all browser events will be delivered.
- [browseResultsChangedHandler](browseresultschangedhandler.md): A handler that delivers updates about discovered services.
- [NWBrowser.Result](result.md): A set of discovered services and changes from the last result.
