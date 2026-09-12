> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/source/uuid](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/source/uuid)

# uuid (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for the timecode source.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="discussion"></a>

## Discussion

The UUID uniquely identifies this timecode source. It is particularly useful when multiple sources of the same type are available, allowing your application to distinguish between them.

> **Note**

> This value does not persist across application sessions.

## See Also

### Inspecting the source

- [displayName](displayname.md): The name of the timecode source.
- [type](type.md): The type of timecode source.

# uuid (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A unique identifier for the timecode source.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * uuid;
```

<a id="discussion"></a>

## Discussion

The UUID uniquely identifies this timecode source. It is particularly useful when multiple sources of the same type are available, allowing your application to distinguish between them.

> **Note**

> This value does not persist across application sessions.

## See Also

### Inspecting the source

- [displayName](displayname.md): The name of the timecode source.
- [type](type.md): The type of timecode source.
