> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccopyerrormessagestring(_:_:)](https://developer.apple.com/documentation/security/seccopyerrormessagestring(_:_:))

# SecCopyErrorMessageString(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Returns a string explaining the meaning of a security result code.

## Declaration

```swift
func SecCopyErrorMessageString(_ status: OSStatus, _ reserved: UnsafeMutableRawPointer?) -> CFString?
```

## Parameters

- `status`: A result code of type `OSStatus` returned by a security function. See [Security Framework Result Codes](security-framework-result-codes.md) for a list of codes.
- `reserved`: Reserved for future use. Pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A human-readable string describing the result, or `nil` if no string is available for the specified result code. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.

# SecCopyErrorMessageString (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

Returns a string explaining the meaning of a security result code.

## Declaration

```objectivec
CFStringRefSecCopyErrorMessageString(OSStatus status, void *reserved);
```

## Parameters

- `status`: A result code of type `OSStatus` returned by a security function. See [Security Framework Result Codes](security-framework-result-codes.md) for a list of codes.
- `reserved`: Reserved for future use. Pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A human-readable string describing the result, or `nil` if no string is available for the specified result code. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished using it.
