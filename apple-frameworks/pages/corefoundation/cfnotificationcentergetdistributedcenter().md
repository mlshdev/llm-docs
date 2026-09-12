> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationcentergetdistributedcenter()](https://developer.apple.com/documentation/corefoundation/cfnotificationcentergetdistributedcenter())

# CFNotificationCenterGetDistributedCenter() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS

Returns the application’s distributed notification center.

## Declaration

```swift
func CFNotificationCenterGetDistributedCenter() -> CFNotificationCenter!
```

<a id="return-value"></a>

## Return Value

The application’s distributed notification center. An application has only one distributed notification center, so this function returns the same value each time it is called.

<a id="Discussion"></a>

## Discussion

A distributed notification center delivers notifications between applications. A notification object used with a distributed notification center must always be a CFString object and the notification dictionary must contain only property list values.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter()](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetLocalCenter()](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.

# CFNotificationCenterGetDistributedCenter (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** macOS

Returns the application’s distributed notification center.

## Declaration

```objectivec
extern CFNotificationCenterRefCFNotificationCenterGetDistributedCenter();
```

<a id="return-value"></a>

## Return Value

The application’s distributed notification center. An application has only one distributed notification center, so this function returns the same value each time it is called.

<a id="Discussion"></a>

## Discussion

A distributed notification center delivers notifications between applications. A notification object used with a distributed notification center must always be a CFString object and the notification dictionary must contain only property list values.

## See Also

### Accessing a Notification Center

- [CFNotificationCenterGetDarwinNotifyCenter](cfnotificationcentergetdarwinnotifycenter%28%29.md): Returns the application’s Darwin notification center.
- [CFNotificationCenterGetLocalCenter](cfnotificationcentergetlocalcenter%28%29.md): Returns the application’s local notification center.
