> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogstore/init(url:)-5v3w7](https://developer.apple.com/documentation/oslog/oslogstore/init(url:)-5v3w7)

# init(url:) (Swift)

**Framework:** OSLog  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a log store based on a log archive.

## Declaration

```swift
convenience init(url: URL) throws
```

## See Also

### Creating Log Stores

- [local()](local%28%29.md): Creates a log store representing the Mac’s local store.

# storeWithURL:error: (Objective-C)

**Framework:** OSLog  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a log store based on a log archive.

## Declaration

```objectivec
+ (instancetype) storeWithURL:(NSURL *) url error:(NSError **) error;
```

## See Also

### Creating Log Stores

- [localStoreAndReturnError:](local%28%29.md): Creates a log store representing the Mac’s local store.
