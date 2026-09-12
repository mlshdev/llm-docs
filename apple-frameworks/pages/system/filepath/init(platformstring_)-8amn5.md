> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/init(platformstring:)-8amn5](https://developer.apple.com/documentation/system/filepath/init(platformstring:)-8amn5)

# init(platformString:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a file path by copying bytes from a null-terminated platform string.

## Declaration

```swift
init(platformString: [CInterop.PlatformChar])
```

## Parameters

- `platformString`: A null-terminated platform string.

<a id="discussion"></a>

## Discussion

- Note It is a precondition that `platformString` must be null-terminated. The absence of a null byte will trigger a runtime error.
