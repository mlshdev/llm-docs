> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/intent](https://developer.apple.com/documentation/foundation/nsextensioncontext/intent)

# intent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Metadata for populating your share extensions interface.

## Declaration

```swift
var intent: INIntent? { get }
```

## Mentioned In

- [Supporting suggestions in your app’s share extension](../supporting-suggestions-in-your-app-s-share-extension.md)

<a id="Discussion"></a>

## Discussion

When the user selects an app from the list of suggested apps in iOS’s share sheet, this property contains metadata that you can use to populate your share extensions interface. The source for the metadata is the [INSendMessageIntent](../../intents/insendmessageintent.md) of your messaging app.

This property is `nil` if your app’s share extension wasn’t launched from the list of suggested apps.

> **Note**

>  To learn more about adding a share extension to the list of suggested apps, read [Supporting suggestions in your app’s share extension](../supporting-suggestions-in-your-app-s-share-extension.md).

# intent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Metadata for populating your share extensions interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) INIntent * intent;
```

```objectivec
@property (atomic, strong, readonly, nullable) INIntent * intent;
```

## Mentioned In

- [Supporting suggestions in your app’s share extension](../supporting-suggestions-in-your-app-s-share-extension.md)

<a id="Discussion"></a>

## Discussion

When the user selects an app from the list of suggested apps in iOS’s share sheet, this property contains metadata that you can use to populate your share extensions interface. The source for the metadata is the [INSendMessageIntent](../../intents/insendmessageintent.md) of your messaging app.

This property is `nil` if your app’s share extension wasn’t launched from the list of suggested apps.

> **Note**

>  To learn more about adding a share extension to the list of suggested apps, read [Supporting suggestions in your app’s share extension](../supporting-suggestions-in-your-app-s-share-extension.md).
