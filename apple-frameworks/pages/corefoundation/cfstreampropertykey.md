> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreampropertykey](https://developer.apple.com/documentation/corefoundation/cfstreampropertykey)

# CFStreamPropertyKey (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CFStreamPropertyKey
```

## Topics

### Type Properties

- [appendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [dataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [fileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [socketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [socketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [socketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.

### Initializers

- [init(\_:)](cfstreampropertykey/init%28__%29.md)
- [init(rawValue:)](cfstreampropertykey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.

# CFStreamPropertyKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef CFStringRef CFStreamPropertyKey;
```

## Topics

### Type Properties

- [kCFStreamPropertyAppendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [kCFStreamPropertyDataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [kCFStreamPropertyFileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [kCFStreamPropertySocketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [kCFStreamPropertySocketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertySocketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFDateFormatterKey](cfdateformatterkey.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.
- [CGFloat](cgfloat-c.typealias.md): The basic type for all floating-point values.
- [HRESULT](hresult.md)
- [LPVOID](lpvoid.md)
- [REFIID](refiid.md)
- [ULONG](ulong.md)
