> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/requestagerange

# requestAgeRange

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An action that presents a system interface to request a person’s age range.

## Declaration

```swift
var requestAgeRange: DeclaredAgeRangeAction { get }
```

<a id="discussion"></a>

## Discussion

Call this action from a [Button](../button.md) or [onAppear(perform:)](../view/onappear%28perform_%29.md) to ask people to share their age range with your app.
