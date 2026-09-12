> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidusage/usage](https://developer.apple.com/documentation/corehid/hidusage/usage)

# usage

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The usage value.

## Declaration

```swift
var usage: UInt16? { get }
```

<a id="discussion"></a>

## Discussion

The usage combines with the page to determine specific functionality. This may not be specified, in which case the `HIDUsage` refers to the overall page.
