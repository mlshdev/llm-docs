> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/showsignificantupdateacknowledgment](https://developer.apple.com/documentation/swiftui/environmentvalues/showsignificantupdateacknowledgment)

# showSignificantUpdateAcknowledgment

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Presents a system interface to inform people about significant app changes and request their acknowledgment.

## Declaration

```swift
var showSignificantUpdateAcknowledgment: SignificantUpdateAction { get }
```

<a id="discussion"></a>

## Discussion

Call this action from a [Button](../button.md) or [onAppear(perform:)](../view/onappear%28perform_%29.md) to inform people about significant app changes that require their acknowledgment.
