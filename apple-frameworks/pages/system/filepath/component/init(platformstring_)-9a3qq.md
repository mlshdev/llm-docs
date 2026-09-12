> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/init(platformstring:)-9a3qq](https://developer.apple.com/documentation/system/filepath/component/init(platformstring:)-9a3qq)

# init(platformString:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a file path component by copying bytes from a null-terminated platform string.

## Declaration

```swift
init?(platformString: UnsafePointer<CInterop.PlatformChar>)
```

## Parameters

- `platformString`: A pointer to a null-terminated platform string.

<a id="discussion"></a>

## Discussion

Returns `nil` if `platformString` is empty, is a root, or has more than one component in it.
