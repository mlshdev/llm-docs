> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(contentsof:)](https://developer.apple.com/documentation/foundation/nsdata/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object from the data at the specified file URL, or returns `nil` if the system can’t create one.

## Declaration

```swift
init?(contentsOf url: URL)
```

## Parameters

- `url`: The location on disk of the data to read.

<a id="discussion"></a>

## Discussion

> **Important**

>  As this method runs synchronously and blocks the calling thread until it finishes, don’t invoke it from the main thread. Use file coordination or one of the nonblocking file-related APIs instead.

If you specify a malformed URL or the referenced location doesn’t exist on disk, the initializer fails and returns `nil`. To handle such errors, use `NSData/init(contentsOfURL:options:)-5abi3` instead.

# initWithContentsOfURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object from the data at the specified file URL, or returns `nil` if the system can’t create one.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The location on disk of the data to read.

<a id="discussion"></a>

## Discussion

> **Important**

>  As this method runs synchronously and blocks the calling thread until it finishes, don’t invoke it from the main thread. Use file coordination or one of the nonblocking file-related APIs instead.

If you specify a malformed URL or the referenced location doesn’t exist on disk, the initializer fails and returns `nil`. To handle such errors, use `NSData/init(contentsOfURL:options:)-5abi3` instead.
