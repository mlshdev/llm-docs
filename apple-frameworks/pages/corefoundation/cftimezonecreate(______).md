> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftimezonecreate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cftimezonecreate(_:_:_:))

# CFTimeZoneCreate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a time zone with a given name and data.

## Declaration

```swift
func CFTimeZoneCreate(_ allocator: CFAllocator!, _ name: CFString!, _ data: CFData!) -> CFTimeZone!
```

## Parameters

- `allocator`: The allocator object to use to allocate memory for the new time zone. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `name`: The name of the time zone to create.
- `data`: The data to use to initialize the time zone. The contents of the data should be the same as that found within the time-zone files located at `/usr/share/zoneinfo`.

<a id="return-value"></a>

## Return Value

A time zone corresponding to `name` and `data`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You typically do not call this function directly. Use the [CFTimeZoneCreateWithName(\_:\_:\_:)](cftimezonecreatewithname%28______%29.md) function to obtain a time zone given its name.

## See Also

### Creating a Time Zone

- [CFTimeZoneCreateWithName(\_:\_:\_:)](cftimezonecreatewithname%28______%29.md): Returns the time zone object identified by a given name or abbreviation.
- [CFTimeZoneCreateWithTimeIntervalFromGMT(\_:\_:)](cftimezonecreatewithtimeintervalfromgmt%28____%29.md): Returns a time zone object for the specified time interval offset from Greenwich Mean Time (GMT).

# CFTimeZoneCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a time zone with a given name and data.

## Declaration

```objectivec
extern CFTimeZoneRefCFTimeZoneCreate(CFAllocatorRef allocator, CFStringRef name, CFDataRef data);
```

## Parameters

- `allocator`: The allocator object to use to allocate memory for the new time zone. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `name`: The name of the time zone to create.
- `data`: The data to use to initialize the time zone. The contents of the data should be the same as that found within the time-zone files located at `/usr/share/zoneinfo`.

<a id="return-value"></a>

## Return Value

A time zone corresponding to `name` and `data`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You typically do not call this function directly. Use the [CFTimeZoneCreateWithName](cftimezonecreatewithname%28______%29.md) function to obtain a time zone given its name.

## See Also

### Creating a Time Zone

- [CFTimeZoneCreateWithName](cftimezonecreatewithname%28______%29.md): Returns the time zone object identified by a given name or abbreviation.
- [CFTimeZoneCreateWithTimeIntervalFromGMT](cftimezonecreatewithtimeintervalfromgmt%28____%29.md): Returns a time zone object for the specified time interval offset from Greenwich Mean Time (GMT).
