> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratorresult](https://developer.apple.com/documentation/corefoundation/cfurlenumeratorresult)

# CFURLEnumeratorResult (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Result codes from the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.

## Declaration

```swift
enum CFURLEnumeratorResult
```

## Topics

### Constants

- [CFURLEnumeratorResult.success](cfurlenumeratorresult/success.md): The enumerator was advanced successfully and returned a valid URL.
- [CFURLEnumeratorResult.end](cfurlenumeratorresult/end.md): The enumeration is complete.
- [CFURLEnumeratorResult.error](cfurlenumeratorresult/error.md): An error occurred during enumeration. The `error` parameter of the function is populated with error information.
- [CFURLEnumeratorResult.directoryPostOrderSuccess](cfurlenumeratorresult/directorypostordersuccess.md): The recursive post-order enumerator returned the URL for a directory after having returned the URLs for all of the directory’s descendents.

### Initializers

- [init(rawValue:)](cfurlenumeratorresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CGRectEdge](cgrectedge.md)

# CFURLEnumeratorResult (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Result codes from the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.

## Declaration

```objectivec
enum CFURLEnumeratorResult : CFIndex;
```

## Topics

### Constants

- [kCFURLEnumeratorSuccess](cfurlenumeratorresult/success.md): The enumerator was advanced successfully and returned a valid URL.
- [kCFURLEnumeratorEnd](cfurlenumeratorresult/end.md): The enumeration is complete.
- [kCFURLEnumeratorError](cfurlenumeratorresult/error.md): An error occurred during enumeration. The `error` parameter of the function is populated with error information.
- [kCFURLEnumeratorDirectoryPostOrderSuccess](cfurlenumeratorresult/directorypostordersuccess.md): The recursive post-order enumerator returned the URL for a directory after having returned the URLs for all of the directory’s descendents.

## See Also

### Enumerations

- [CFFileSecurityClearOptions](cffilesecurityclearoptions.md)
- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CGRectEdge](cgrectedge.md)
