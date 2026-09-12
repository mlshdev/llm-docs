> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidusage/init(page:usage:)](https://developer.apple.com/documentation/corehid/hidusage/init(page:usage:))

# init(page:usage:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a HID usage page from raw page and usage values.

## Declaration

```swift
init(page: UInt16, usage: UInt16?)
```

<a id="discussion"></a>

## Discussion

Unsupported cases are returned as [HIDUsage.generic(\_:\_:)](generic%28____%29.md).
