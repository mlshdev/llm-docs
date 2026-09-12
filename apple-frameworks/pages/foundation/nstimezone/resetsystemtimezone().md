> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/resetsystemtimezone()](https://developer.apple.com/documentation/foundation/nstimezone/resetsystemtimezone())

# resetSystemTimeZone() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears any time zone value cached for the [system](system.md) property.

## Declaration

```swift
class func resetSystemTimeZone()
```

<a id="Discussion"></a>

## Discussion

If the app has cached the system time zone by accessing the [system](system.md) class property, this method clears that cached value. If you subsequently access the [system](system.md) class property, a new time zone object is created and cached.

## See Also

### Working with System Time Zones

- [local](local.md): An object that tracks the current system time zone.
- [system](system.md): The time zone currently used by the system.
- [default](default.md): The default time zone for the current app.

# resetSystemTimeZone (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Clears any time zone value cached for the [systemTimeZone](system.md) property.

## Declaration

```objectivec
+ (void) resetSystemTimeZone;
```

<a id="Discussion"></a>

## Discussion

If the app has cached the system time zone by accessing the [systemTimeZone](system.md) class property, this method clears that cached value. If you subsequently access the [systemTimeZone](system.md) class property, a new time zone object is created and cached.

## See Also

### Working with System Time Zones

- [localTimeZone](local.md): An object that tracks the current system time zone.
- [systemTimeZone](system.md): The time zone currently used by the system.
- [defaultTimeZone](default.md): The default time zone for the current app.
