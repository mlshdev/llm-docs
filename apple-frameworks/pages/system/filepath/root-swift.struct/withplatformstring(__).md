> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/root-swift.struct/withplatformstring(_:)](https://developer.apple.com/documentation/system/filepath/root-swift.struct/withplatformstring(_:))

# withPlatformString(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Calls the given closure with a pointer to the contents of the file path root, represented as a null-terminated platform string.

## Declaration

```swift
func withPlatformString<Result>(_ body: (UnsafePointer<CInterop.PlatformChar>) throws -> Result) rethrows -> Result
```

## Parameters

- `body`: A closure with a pointer parameter that points to a null-terminated platform string. If `body` has a return value, that value is also used as the return value for this method.

<a id="return-value"></a>

## Return Value

The return value, if any, of the `body` closure parameter.

<a id="discussion"></a>

## Discussion

If the path has a relative portion, an allocation will occur in order to add the null terminator.

The pointer passed as an argument to `body` is valid only during the execution of this method. Don’t try to store the pointer for later use.
