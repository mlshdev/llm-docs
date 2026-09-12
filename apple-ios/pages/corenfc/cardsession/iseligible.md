> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/iseligible](https://developer.apple.com/documentation/corenfc/cardsession/iseligible)

# isEligible

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A property that indicates whether the current system supports card session functionality.

## Declaration

```swift
static var isEligible: Bool { get async }
```

<a id="Discussion"></a>

## Discussion

Query this property before calling [init()](init%28%29.md) to avoid showing a system card session UI on ineligible devices.

## See Also

### Determining card session availability

- [isSupported](issupported.md): A property that indicates whether the current device supports card session functionality.
