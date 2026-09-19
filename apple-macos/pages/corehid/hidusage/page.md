> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hidusage/page

# page

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The usage page value.

## Declaration

```swift
var page: UInt16 { get }
```

<a id="discussion"></a>

## Discussion

This value determines the broader category of the functionality. This must always be specified, as a usage doesn’t have meaning without a page.
