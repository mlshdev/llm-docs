> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/datawithcontentsofurl:options:error:](https://developer.apple.com/documentation/foundation/nsdata/datawithcontentsofurl:options:error:)

# dataWithContentsOfURL:options:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object from the data at the provided file URL using specific reading options.

## Declaration

```objectivec
+ (instancetype) dataWithContentsOfURL:(NSURL *) url options:(NSDataReadingOptions) readOptionsMask error:(NSError **) errorPtr;
```

## Parameters

- `url`: The location on disk of the data to read.
- `readOptionsMask`: The mask specifying the options to use when reading the data. For more information, see [NSDataReadingOptions](readingoptions.md).
- `errorPtr`: `nil` if the data is read; otherwise, an error object describing the failure.

<a id="return-value"></a>

## Return Value

A data object that contains the file’s data, or `nil` if the system can’t create one.

<a id="discussion"></a>

## Discussion

> **Important**

>  As this method runs synchronously and blocks the calling thread until it finishes, don’t invoke it from the main thread. Use file coordination or one of the nonblocking file-related APIs instead.
