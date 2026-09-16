> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/dictionary/init(_:including:)-7afz2

# init(\_:including:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init<S>(_ container: AttributeContainer, including scope: S.Type) throws where S : AttributeScope
```

## See Also

### Creating a Dictionary from an Attribute Container

- [init(\_:including:)](init%28__including_%29-8ls7v.md): Conforms when `Key` is `NSAttributedString.Key` and `Value` is `Any`.
- [init(\_:)](init%28__%29.md): Conforms when `Key` is `NSAttributedString.Key` and `Value` is `Any`.
