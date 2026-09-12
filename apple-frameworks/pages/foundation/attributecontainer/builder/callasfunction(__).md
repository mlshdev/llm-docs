> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/builder/callasfunction(_:)](https://developer.apple.com/documentation/foundation/attributecontainer/builder/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Builds an attribute container by setting an attribute and returning a modified attribute container.

## Declaration

```swift
@preconcurrency func callAsFunction(_ value: T.Value) -> AttributeContainer where T.Value : Sendable
```

## Parameters

- `value`: The value to set on the returned attribute container.

<a id="return-value"></a>

## Return Value

An attribute container with the provided value set on the builder’s [AttributedStringKey](../../attributedstringkey.md).
