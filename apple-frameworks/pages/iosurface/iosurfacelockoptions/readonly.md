> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurfacelockoptions/readonly](https://developer.apple.com/documentation/iosurface/iosurfacelockoptions/readonly)

# readOnly (Swift)

**Framework:** IOSurface  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
static var readOnly: IOSurfaceLockOptions { get }
```

<a id="Discussion"></a>

## Discussion

If you are not going to modify the data while you hold the lock, you should set this flag to avoid invalidating any existing caches of the buffer contents. This flag should be passed both to the lock and unlock functions. Non-symmentrical usage of this flag will result in undefined behavior.

## See Also

### Options

- [avoidSync](avoidsync.md)

# kIOSurfaceLockReadOnly (Objective-C)

**Framework:** IOSurface  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
kIOSurfaceLockReadOnly
```

<a id="Discussion"></a>

## Discussion

If you are not going to modify the data while you hold the lock, you should set this flag to avoid invalidating any existing caches of the buffer contents. This flag should be passed both to the lock and unlock functions. Non-symmentrical usage of this flag will result in undefined behavior.

## See Also

### Options

- [kIOSurfaceLockAvoidSync](avoidsync.md)
