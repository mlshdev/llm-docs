> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openexternalurloptionskey](https://developer.apple.com/documentation/uikit/uiapplication/openexternalurloptionskey)

# UIApplication.OpenExternalURLOptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options for opening a URL.

## Declaration

```swift
struct OpenExternalURLOptionsKey
```

## Topics

### URL options

- [universalLinksOnly](openexternalurloptionskey/universallinksonly.md): URLs must be universal links and have an app configured to open them.

### Measuring ad taps

- [eventAttribution](openexternalurloptionskey/eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.

### Initializers

- [init(rawValue:)](openexternalurloptionskey/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening a URL resource

- [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [canOpenURL(\_:)](canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.

# UIApplicationOpenExternalURLOptionsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Options for opening a URL.

## Declaration

```objectivec
typedef NSString * UIApplicationOpenExternalURLOptionsKey;
```

## Topics

### URL options

- [UIApplicationOpenURLOptionUniversalLinksOnly](openexternalurloptionskey/universallinksonly.md): URLs must be universal links and have an app configured to open them.

### Measuring ad taps

- [UIApplicationOpenExternalURLOptionsEventAttributionKey](openexternalurloptionskey/eventattribution.md): An object you use to send tap event attribution data to the browser for Private Click Measurement.

## See Also

### Opening a URL resource

- [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [canOpenURL:](canopenurl%28__%29.md): Deprecated. Returns a Boolean value that indicates whether an app is available to handle a URL scheme.
