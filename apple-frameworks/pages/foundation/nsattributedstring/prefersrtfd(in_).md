> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/prefersrtfd(in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/prefersrtfd(in:))

# prefersRTFD(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.

## Declaration

```swift
func prefersRTFD(in range: NSRange) -> Bool
```

## Parameters

- `range`: The range of text to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the range of text prefers RTFD formatting, or [false](https://developer.apple.com/documentation/swift/false) if you can use the RTF format instead.

<a id="Discussion"></a>

## Discussion

When an attributed string contains attachments, you must save it using the RTFD file format to preserve the attached files.

## See Also

### Getting the supported text-file formats

- [textTypes](texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.
- [textUnfilteredTypes](textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.

# prefersRTFDInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether the specified range of text prefers RTFD formatting.

## Declaration

```objectivec
- (BOOL) prefersRTFDInRange:(NSRange) range;
```

## Parameters

- `range`: The range of text to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the range of text prefers RTFD formatting, or [false](https://developer.apple.com/documentation/swift/false) if you can use the RTF format instead.

<a id="Discussion"></a>

## Discussion

When an attributed string contains attachments, you must save it using the RTFD file format to preserve the attached files.

## See Also

### Getting the supported text-file formats

- [textTypes](texttypes.md): An array of UTI strings that identify the file types that attributed strings support, either directly or through a user-installed filter service.
- [textUnfilteredTypes](textunfilteredtypes.md): An array of UTI strings that identify the file types that attributed strings support directly.
