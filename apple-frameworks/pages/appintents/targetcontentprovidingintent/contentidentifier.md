> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/targetcontentprovidingintent/contentidentifier

# contentIdentifier

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A custom string your app uses to identify the app intent.

## Declaration

```swift
var contentIdentifier: String { get }
```

## Mentioned In

- [Directing app intents to your app’s scenes](../directing-app-intents-to-your-apps-scenes.md)

<a id="discussion"></a>

## Discussion

The protocol provides a default implementation of this property and sets its value to the name of the app intent type. You can also reimplement this property to provide a custom value for your app intent.

## Default Implementations

### TargetContentProvidingIntent Implementations

- [contentIdentifier](contentidentifier-4cvg3.md): A custom string your app uses to identify the app intent.
- [contentIdentifier](contentidentifier-596wr.md): Conforms when `Self` conforms to `OpenIntent`. A custom string your app uses to identify the app intent.

### UISceneAppIntent Implementations

- [contentIdentifier](../uisceneappintent/contentidentifier.md): Conforms when `Self` conforms to `OpenIntent`. A custom string your app uses to identify the app intent.
