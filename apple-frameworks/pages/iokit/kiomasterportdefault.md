> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiomasterportdefault](https://developer.apple.com/documentation/iokit/kiomasterportdefault)

# kIOMasterPortDefault (Swift)

**Framework:** IOKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 10.14+ · macOS 10.0+ (deprecated in 12.0)

The default mach port used to initiate communication with IOKit.

## Declaration

```swift
let kIOMasterPortDefault: mach_port_t
```

<a id="discussion"></a>

## Discussion

When specifying a primary port to IOKit functions, the NULL argument indicates "use the default". This is a synonym for NULL, if you'd rather use a named constant.

# kIOMasterPortDefault (Objective-C)

**Framework:** IOKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 10.14+ · macOS 10.0+ (deprecated in 12.0)

The default mach port used to initiate communication with IOKit.

## Declaration

```objectivec
const mach_port_t kIOMasterPortDefault;
```

<a id="discussion"></a>

## Discussion

When specifying a primary port to IOKit functions, the NULL argument indicates "use the default". This is a synonym for NULL, if you'd rather use a named constant.
