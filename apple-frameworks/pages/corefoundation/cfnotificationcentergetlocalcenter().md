> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfnotificationcentergetlocalcenter()

# CFNotificationCenterGetLocalCenter() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the application’s local notification center.

## Declaration

```swift
func CFNotificationCenterGetLocalCenter() -> CFNotificationCenter!
```

<a id="return-value"></a>

## Return Value

The application’s local notification center. An application has only one local notification center, so this function returns the same value each time it is called.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter()](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetDistributedCenter()](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.

# CFNotificationCenterGetLocalCenter (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the application’s local notification center.

## Declaration

```objectivec
extern CFNotificationCenterRefCFNotificationCenterGetLocalCenter();
```

<a id="return-value"></a>

## Return Value

The application’s local notification center. An application has only one local notification center, so this function returns the same value each time it is called.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetDistributedCenter](cfnotificationcentergetdistributedcenter%28%29.md): Returns the application’s distributed notification center.
