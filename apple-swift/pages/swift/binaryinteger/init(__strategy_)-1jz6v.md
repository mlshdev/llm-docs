> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/init(_:strategy:)-1jz6v](https://developer.apple.com/documentation/swift/binaryinteger/init(_:strategy:)-1jz6v)

# init(\_:strategy:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Initialize an instance by parsing `value` with the given `strategy`.

## Declaration

```swift
init<S>(_ value: S.ParseInput, strategy: S) throws where Self == S.ParseOutput, S : ParseStrategy
```
