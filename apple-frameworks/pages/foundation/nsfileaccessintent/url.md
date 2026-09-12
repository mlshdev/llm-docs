> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileaccessintent/url](https://developer.apple.com/documentation/foundation/nsfileaccessintent/url)

# url (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current URL for the item managed by the file access intent instance. (read-only)

## Declaration

```swift
var url: URL { get }
```

<a id="Discussion"></a>

## Discussion

Always use the URL returned by this property inside the accessor block of a file coordinator’s [coordinate(with:queue:byAccessor:)](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method. This property’s value may be different from the original URL, because the item was either moved or renamed while the file coordinator waited for access.

## See Also

### Related Documentation

- [coordinate(with:queue:byAccessor:)](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.

# URL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current URL for the item managed by the file access intent instance. (read-only)

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Always use the URL returned by this property inside the accessor block of a file coordinator’s [coordinateAccessWithIntents:queue:byAccessor:](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method. This property’s value may be different from the original URL, because the item was either moved or renamed while the file coordinator waited for access.

## See Also

### Related Documentation

- [coordinateAccessWithIntents:queue:byAccessor:](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.
