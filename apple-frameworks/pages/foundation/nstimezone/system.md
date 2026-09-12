> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/system](https://developer.apple.com/documentation/foundation/nstimezone/system)

# system (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone currently used by the system.

## Declaration

```swift
class var system: TimeZone { get }
```

<a id="Discussion"></a>

## Discussion

If the current system time zone cannot be determined, the GMT time zone is used instead.

If you access the [system](system.md) class property, its value is cached by the app and doesn’t update if the user subsequently changes the system time zone. In order for the [system](system.md) property to reflect the new time zone, you must first call the [resetSystemTimeZone()](resetsystemtimezone%28%29.md) method to clear the cached value. Then, the next time you access the [system](system.md) property, it returns the current system time zone, and caches that value.

If you access the [system](system.md) class property, assign its value to a variable, and clear the cached value for the property by calling the [resetSystemTimeZone()](resetsystemtimezone%28%29.md) method, the object stored in the variable doesn’t update to reflect the new system time zone. Contrast this behavior with that of the [local](local.md) class property, which returns a proxy object that always reflects the current system time zone.

## See Also

### Working with System Time Zones

- [local](local.md): An object that tracks the current system time zone.
- [resetSystemTimeZone()](resetsystemtimezone%28%29.md): Clears any time zone value cached for the [system](system.md) property.
- [default](default.md): The default time zone for the current app.

# systemTimeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time zone currently used by the system.

## Declaration

```objectivec
@property (class, copy, readonly) NSTimeZone * systemTimeZone;
```

<a id="Discussion"></a>

## Discussion

If the current system time zone cannot be determined, the GMT time zone is used instead.

If you access the [systemTimeZone](system.md) class property, its value is cached by the app and doesn’t update if the user subsequently changes the system time zone. In order for the [systemTimeZone](system.md) property to reflect the new time zone, you must first call the [resetSystemTimeZone](resetsystemtimezone%28%29.md) method to clear the cached value. Then, the next time you access the [systemTimeZone](system.md) property, it returns the current system time zone, and caches that value.

If you access the [systemTimeZone](system.md) class property, assign its value to a variable, and clear the cached value for the property by calling the [resetSystemTimeZone](resetsystemtimezone%28%29.md) method, the object stored in the variable doesn’t update to reflect the new system time zone. Contrast this behavior with that of the [localTimeZone](local.md) class property, which returns a proxy object that always reflects the current system time zone.

## See Also

### Working with System Time Zones

- [localTimeZone](local.md): An object that tracks the current system time zone.
- [resetSystemTimeZone](resetsystemtimezone%28%29.md): Clears any time zone value cached for the [systemTimeZone](system.md) property.
- [defaultTimeZone](default.md): The default time zone for the current app.
