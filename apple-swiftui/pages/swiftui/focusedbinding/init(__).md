> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/focusedbinding/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A new property wrapper for the given key path.

## Declaration

```swift
init(_ keyPath: KeyPath<FocusedValues, Binding<Value>?>)
```

## Parameters

- `keyPath`: The key path for the focus value to read.

<a id="discussion"></a>

## Discussion

The value of the property wrapper is updated dynamically as focus changes and different published bindings go in and out of scope.
