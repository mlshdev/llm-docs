> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onreceive(_:perform:)](https://developer.apple.com/documentation/swiftui/view/onreceive(_:perform:))

# onReceive(\_:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an action to perform when this view detects data emitted by the given publisher.

## Declaration

```swift
nonisolated func onReceive<P>(_ publisher: P, perform action: @escaping (P.Output) -> Void) -> some View where P : Publisher, P.Failure == Never

```

## Parameters

- `publisher`: The publisher to subscribe to.
- `action`: The action to perform when an event is emitted by `publisher`. The event emitted by publisher is passed as a parameter to `action`.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when `publisher` emits an event.

## See Also

### Responding to data changes

- [onChange(of:initial:\_:)](onchange%28of_initial___%29.md): Adds a modifier for this view that fires an action when a specific value changes.
