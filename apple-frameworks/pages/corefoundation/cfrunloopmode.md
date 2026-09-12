> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopmode](https://developer.apple.com/documentation/corefoundation/cfrunloopmode)

# CFRunLoopMode (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CFRunLoopMode
```

## Topics

### Type Properties

- [commonModes](cfrunloopmode/commonmodes.md): Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md).
- [defaultMode](cfrunloopmode/defaultmode.md): Run loop mode that should be used when a thread is in its default, or idle, state, waiting for an event. This mode is used when the run loop is started with [CFRunLoopRun()](cfrunlooprun%28%29.md).

### Initializers

- [init(\_:)](cfrunloopmode/init%28__%29.md)
- [init(rawValue:)](cfrunloopmode/init%28rawvalue_%29.md)

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
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.

# CFRunLoopMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef CFStringRef CFRunLoopMode;
```

## Topics

### Type Properties

- [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md): Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md).
- [kCFRunLoopDefaultMode](cfrunloopmode/defaultmode.md): Run loop mode that should be used when a thread is in its default, or idle, state, waiting for an event. This mode is used when the run loop is started with [CFRunLoopRun](cfrunlooprun%28%29.md).

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
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.
- [CGFloat](cgfloat-c.typealias.md): The basic type for all floating-point values.
- [HRESULT](hresult.md)
- [LPVOID](lpvoid.md)
- [REFIID](refiid.md)
- [ULONG](ulong.md)
