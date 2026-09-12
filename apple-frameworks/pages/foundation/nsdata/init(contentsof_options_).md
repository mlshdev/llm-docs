> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(contentsof:options:)](https://developer.apple.com/documentation/foundation/nsdata/init(contentsof:options:))

# init(contentsOf:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object from the data at the provided file URL using specific reading options.

## Declaration

```swift
init(contentsOf url: URL, options readOptionsMask: NSData.ReadingOptions = []) throws
```

## Parameters

- `url`: The location on disk of the data to read.
- `readOptionsMask`: The mask specifying the options to use when reading the data. For more information, see [NSData.ReadingOptions](readingoptions.md).

<a id="discussion"></a>

## Discussion

> **Important**

>  As this method runs synchronously and blocks the calling thread until it finishes, don’t invoke it from the main thread. Use file coordination or one of the nonblocking file-related APIs instead.

If the system can’t create an instance, the initializer may throw in Swift, or return `nil` in Objective-C.

# initWithContentsOfURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object from the data at the provided file URL using specific reading options.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url options:(NSDataReadingOptions) readOptionsMask error:(NSError **) errorPtr;
```

## Parameters

- `url`: The location on disk of the data to read.
- `readOptionsMask`: The mask specifying the options to use when reading the data. For more information, see [NSDataReadingOptions](readingoptions.md).
- `errorPtr`: `nil` if the data is read; otherwise, an error object describing the failure.

<a id="discussion"></a>

## Discussion

> **Important**

>  As this method runs synchronously and blocks the calling thread until it finishes, don’t invoke it from the main thread. Use file coordination or one of the nonblocking file-related APIs instead.

If the system can’t create an instance, the initializer may throw in Swift, or return `nil` in Objective-C.
