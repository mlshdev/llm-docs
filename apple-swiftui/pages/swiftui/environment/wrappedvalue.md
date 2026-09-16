> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environment/wrappedvalue

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current value of the environment property.

## Declaration

```swift
var wrappedValue: Value { get }
```

<a id="discussion"></a>

## Discussion

The wrapped value property provides primary access to the value’s data. However, you don’t access `wrappedValue` directly. Instead, you read the property variable created with the [Environment](../environment.md) property wrapper:

```swift
@Environment(\.colorScheme) var colorScheme: ColorScheme

var body: some View {
    if colorScheme == .dark {
        DarkContent()
    } else {
        LightContent()
    }
}
```
