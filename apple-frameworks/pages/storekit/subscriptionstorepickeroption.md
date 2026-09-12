> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorepickeroption](https://developer.apple.com/documentation/storekit/subscriptionstorepickeroption)

# SubscriptionStorePickerOption

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A subscription option within a subscription picker control.

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionStorePickerOption<Label> where Label : View
```

## Topics

### Creating a subscription picker option

- [init(\_:)](subscriptionstorepickeroption/init%28__%29-4cb3l.md): Conforms when `Label` conforms to `View`.
- [init(\_:)](subscriptionstorepickeroption/init%28__%29-3iu97.md): Conforms when `Label` conforms to `View`.
- [init(\_:label:)](subscriptionstorepickeroption/init%28__label_%29.md): Conforms when `Label` conforms to `View`.

### Supporting types

- [AutomaticSubscriptionStorePickerOptionLabel](automaticsubscriptionstorepickeroptionlabel.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Creating custom subscription store control styles

- [SubscriptionStoreButton](subscriptionstorebutton.md): A button for subscribing to an in-app subscription with a localized label and optional caption.
- [SubscriptionStorePicker](subscriptionstorepicker.md): A composite control with a picker for selecting a subscription option and a button for confirming the subscription.
