> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/wasubscribableservice/id-swift.property

# id

**Framework:** Wi-Fi Aware  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A stable ID that can be used to identify this subscribable service.

## Declaration

```swift
var id: WASubscribableService.ID { get }
```

<a id="discussion"></a>

## Discussion

The ID is stable for a given unique service name.

## See Also

### Checking a service name and ID

- [WASubscribableService.ID](id-swift.typealias.md): The type of value that uniquely identifies the service.
- [name](name.md): The full name of the service, as sent over the air.
