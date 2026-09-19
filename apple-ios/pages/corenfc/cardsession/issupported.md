> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/cardsession/issupported

# isSupported

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

A property that indicates whether the current device supports card session functionality.

## Declaration

```swift
class var isSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Query this property before calling [init()](init%28%29.md) to avoid raising [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29) on ineligible devices.

## See Also

### Determining card session availability

- [isEligible](iseligible.md): A property that indicates whether the current system supports card session functionality.
