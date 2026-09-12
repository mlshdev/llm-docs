> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/start(queue:)](https://developer.apple.com/documentation/network/nwbrowser/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Starts browsing for services, and sets the queue on which all browser events will be delivered.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Browsing for Services

- [init(for:using:)](init%28for_using_%29.md): Initializes a browser with a type of service to discover.
- [NWBrowser.Descriptor](descriptor-swift.enum.md): A service description used to discover Bonjour services.
- [browseResultsChangedHandler](browseresultschangedhandler.md): A handler that delivers updates about discovered services.
- [NWBrowser.Result](result.md): A set of discovered services and changes from the last result.
- [browseResults](browseresults.md): The list of discovered services.
