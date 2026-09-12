> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/issupported](https://developer.apple.com/documentation/corenfc/cardsession/issupported)

# isSupported

**Framework:** Core NFC  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

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
