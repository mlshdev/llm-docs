> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlwritable/write(to:)](https://developer.apple.com/documentation/coreml/mlwritable/write(to:))

# write(to:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Exports a machine learning file to the file system.

## Declaration

```swift
func write(to url: URL) throws
```

## Parameters

- `url`: The location in the file system where the file should be written.

# writeToURL:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Exports a machine learning file to the file system.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location in the file system where the file should be written.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.
