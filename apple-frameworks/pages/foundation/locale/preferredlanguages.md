> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/locale/preferredlanguages

# preferredLanguages

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of the user’s preferred languages.

## Declaration

```swift
static var preferredLanguages: [String] { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  [Bundle](../bundle.md) is responsible for determining the language that your application will run in, based on the result of this API and combined with the languages your application supports.
