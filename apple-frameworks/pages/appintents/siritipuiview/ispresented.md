> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/siritipuiview/ispresented](https://developer.apple.com/documentation/appintents/siritipuiview/ispresented)

# isPresented

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS

Determines if the view should be presented to the user.

## Declaration

```swift
@MainActor @objc @preconcurrency dynamic final var isPresented: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `true` and gets set to `false` after the dismissal button is tapped. Changing this has no affect if `allowsDismissal` is set to `false`. This value is KVO compliant.

## See Also

### Getting the view’s configuration

- [allowsDismissal](allowsdismissal.md): Indicates if the tip view should display a dismissal button
