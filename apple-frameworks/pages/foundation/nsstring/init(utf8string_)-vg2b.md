> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(utf8string:)-vg2b](https://developer.apple.com/documentation/foundation/nsstring/init(utf8string:)-vg2b)

# init(utf8String:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by copying the characters from a given C array of UTF8-encoded bytes.

## Declaration

```swift
convenience init?(utf8String nullTerminatedCString: UnsafePointer<CChar>)
```

## Parameters

- `nullTerminatedCString`: A @c NULL-terminated C array of bytes in UTF-8 encoding. This value must not be @c NULL.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by copying the bytes from @c nullTerminatedCString. The returned object may be different from the original receiver.

# initWithUTF8String: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an @c NSString object initialized by copying the characters from a given C array of UTF8-encoded bytes.

## Declaration

```objectivec
- (instancetype) initWithUTF8String:(const char *) nullTerminatedCString;
```

## Parameters

- `nullTerminatedCString`: A @c NULL-terminated C array of bytes in UTF-8 encoding. This value must not be @c NULL.

<a id="return-value"></a>

## Return Value

An @c NSString object initialized by copying the bytes from @c nullTerminatedCString. The returned object may be different from the original receiver.
