> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationtextattributestransformer-swift.struct/callasfunction(_:)

# callAsFunction(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Calls the transform closure of the text attributes transformer.

## Declaration

```swift
func callAsFunction(_ input: AttributeContainer) -> AttributeContainer
```

## Parameters

- `input`: The current attributes container for a string.

<a id="return-value"></a>

## Return Value

A new, transformed attributes container.

<a id="Discussion"></a>

## Discussion

Using this syntax, you can call the text attributes transformer type as if it were a closure:

```swift
var container = AttributeContainer()
container.backgroundColor = UIColor.blue
let transformer = UIConfigurationTextAttributesTransformer { incoming in
    var outgoing = incoming
    outgoing.backgroundColor = incoming.backgroundColor?.withAlphaComponent(0.6)
    return outgoing
}
let transformed = transformer.callAsFunction(container)

```
