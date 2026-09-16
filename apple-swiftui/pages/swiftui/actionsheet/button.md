> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/actionsheet/button

# ActionSheet.Button

**Framework:** SwiftUI  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

A button representing an operation of an action sheet presentation.

> Use a [View](../view.md) modifier like [confirmationDialog(\_:isPresented:titleVisibility:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog%28_:ispresented:titlevisibility:presenting:actions:message:%29-8y541) instead.

## Declaration

```swift
typealias Button = Alert.Button
```

<a id="discussion"></a>

## Discussion

The [ActionSheet](../actionsheet.md) button is type-aliased to the [Alert](../alert.md) button type, which provides default, cancel, and destructive styles.
