> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/locale(_:)-7c6hb](https://developer.apple.com/documentation/foundation/formatstyle/locale(_:)-7c6hb)

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> Self
```

## Parameters

- `locale`: The locale to apply to the format style.

<a id="return-value"></a>

## Return Value

A format style modified to use the provided locale.

<a id="discussion"></a>

## Discussion

Use this format style to change the locale used by an existing format style.
