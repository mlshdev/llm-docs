> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlscheme/init(_:)](https://developer.apple.com/documentation/webkit/urlscheme/init(_:))

# init(\_:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a new `URLScheme` value from a valid scheme, which WebKit does not already handle.

## Declaration

```swift
@MainActor init?(_ rawValue: String)
```

## Parameters

- `rawValue`: The raw value of the scheme string; if this is an invalid scheme, of if WebKit already handles this scheme, the initializer returns `nil`.

<a id="discussion"></a>

## Discussion

To determine whether WebKit handles a specific scheme, call the `handlesURLScheme(_:)` static method of `WebPage`.
