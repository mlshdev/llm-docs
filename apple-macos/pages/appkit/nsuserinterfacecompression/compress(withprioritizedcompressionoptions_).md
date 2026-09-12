> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacecompression/compress(withprioritizedcompressionoptions:)](https://developer.apple.com/documentation/appkit/nsuserinterfacecompression/compress(withprioritizedcompressionoptions:))

# compress(withPrioritizedCompressionOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Compress the view by applying the specified compression options.

## Declaration

```swift
func compress(withPrioritizedCompressionOptions prioritizedOptions: [NSUserInterfaceCompressionOptions])
```

## Parameters

- `prioritizedOptions`: An array of compression options that the view should apply to reduce its size.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the view should resize itself according to the compression options supplied.

Compression options that are handled by the system are not included in the supplied array.

# compressWithPrioritizedCompressionOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Compress the view by applying the specified compression options.

## Declaration

```objectivec
- (void) compressWithPrioritizedCompressionOptions:(NSArray<NSUserInterfaceCompressionOptions *> *) prioritizedOptions;
```

## Parameters

- `prioritizedOptions`: An array of compression options that the view should apply to reduce its size.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the view should resize itself according to the compression options supplied.

Compression options that are handled by the system are not included in the supplied array.
