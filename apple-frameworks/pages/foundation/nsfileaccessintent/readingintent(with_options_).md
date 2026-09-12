> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileaccessintent/readingintent(with:options:)](https://developer.apple.com/documentation/foundation/nsfileaccessintent/readingintent(with:options:))

# readingIntent(with:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file access intent object for reading the given URL with the provided options.

## Declaration

```swift
class func readingIntent(with url: URL, options: NSFileCoordinator.ReadingOptions = []) -> Self
```

## Parameters

- `url`: The URL of the document you intend to read from.
- `options`: The coordinated reading options. For a list of valid values, see [NSFileCoordinator.ReadingOptions](../nsfilecoordinator/readingoptions.md) in the [NSFileCoordinator](../nsfilecoordinator.md).

<a id="return-value"></a>

## Return Value

A newly instantiated and configured file access intent object.

<a id="Discussion"></a>

## Discussion

When calling a file coordinator’s [coordinate(with:queue:byAccessor:)](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method, you pass an array of file access intent objects. Each intent object represents a specific read or write operation on a single document or directory. Use `readingIntentWithURL:options:` to create an intent object suitable for reading.

## See Also

### Related Documentation

- [coordinate(with:queue:byAccessor:)](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.

### Creating a File Access Intent

- [writingIntent(with:options:)](writingintent%28with_options_%29.md): Returns a file access intent object for writing to the given URL with the provided options.

# readingIntentWithURL:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file access intent object for reading the given URL with the provided options.

## Declaration

```objectivec
+ (instancetype) readingIntentWithURL:(NSURL *) url options:(NSFileCoordinatorReadingOptions) options;
```

## Parameters

- `url`: The URL of the document you intend to read from.
- `options`: The coordinated reading options. For a list of valid values, see [NSFileCoordinatorReadingOptions](../nsfilecoordinator/readingoptions.md) in the [NSFileCoordinator](../nsfilecoordinator.md).

<a id="return-value"></a>

## Return Value

A newly instantiated and configured file access intent object.

<a id="Discussion"></a>

## Discussion

When calling a file coordinator’s [coordinateAccessWithIntents:queue:byAccessor:](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md) method, you pass an array of file access intent objects. Each intent object represents a specific read or write operation on a single document or directory. Use `readingIntentWithURL:options:` to create an intent object suitable for reading.

## See Also

### Related Documentation

- [coordinateAccessWithIntents:queue:byAccessor:](../nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.

### Creating a File Access Intent

- [writingIntentWithURL:options:](writingintent%28with_options_%29.md): Returns a file access intent object for writing to the given URL with the provided options.
