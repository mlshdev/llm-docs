> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/default](https://developer.apple.com/documentation/foundation/nstimezone/default)

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default time zone for the current app.

## Declaration

```swift
class var `default`: TimeZone { get set }
```

<a id="Discussion"></a>

## Discussion

If no [default](default.md) time zone has been set, the current system time zone is used. If the current system time zone cannot be determined, the GMT time zone is used instead.

The [default](default.md) time zone is used by the app for date and time operations. You can set it to cause the app to run as if it were in a different time zone. Setting the [default](default.md) property clears any value that was previously set.

If you access the [default](default.md) class property, assign its value to a variable, and set a new [default](default.md) time zone, the object stored in the variable doesn’t update to reflect the new [default](default.md) time zone. Contrast this behavior with that of the [local](local.md) class property, which returns a proxy object that always reflects the current system time zone.

## See Also

### Working with System Time Zones

- [local](local.md): An object that tracks the current system time zone.
- [system](system.md): The time zone currently used by the system.
- [resetSystemTimeZone()](resetsystemtimezone%28%29.md): Clears any time zone value cached for the [system](system.md) property.

# defaultTimeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default time zone for the current app.

## Declaration

```objectivec
@property (class, copy) NSTimeZone * defaultTimeZone;
```

<a id="Discussion"></a>

## Discussion

If no [defaultTimeZone](default.md) time zone has been set, the current system time zone is used. If the current system time zone cannot be determined, the GMT time zone is used instead.

The [defaultTimeZone](default.md) time zone is used by the app for date and time operations. You can set it to cause the app to run as if it were in a different time zone. Setting the [defaultTimeZone](default.md) property clears any value that was previously set.

If you access the [defaultTimeZone](default.md) class property, assign its value to a variable, and set a new [defaultTimeZone](default.md) time zone, the object stored in the variable doesn’t update to reflect the new [defaultTimeZone](default.md) time zone. Contrast this behavior with that of the [localTimeZone](local.md) class property, which returns a proxy object that always reflects the current system time zone.

## See Also

### Working with System Time Zones

- [localTimeZone](local.md): An object that tracks the current system time zone.
- [systemTimeZone](system.md): The time zone currently used by the system.
- [resetSystemTimeZone](resetsystemtimezone%28%29.md): Clears any time zone value cached for the [systemTimeZone](system.md) property.
