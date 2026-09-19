> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentvalueconvertiblewrapper/init(basevalue:)

# init(baseValue:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new instance that wraps the specified base value.

## Declaration

```swift
init(baseValue: Self.BaseValue) throws
```

## Parameters

- `baseValue`: The underlying value to wrap.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the wrapper cannot be initialized with the given base value.
