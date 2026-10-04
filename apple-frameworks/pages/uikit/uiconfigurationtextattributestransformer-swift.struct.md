> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationtextattributestransformer-swift.struct

# UIConfigurationTextAttributesTransformer

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Defines a text transformation that can affect the visual appearance of a string.

## Declaration

```swift
struct UIConfigurationTextAttributesTransformer
```

<a id="overview"></a>

## Overview

Use a transformer to affect how your attributed text appears on the UI. You provide a closure when initializing the transformer. Your closure accepts a container with the current text attributes and returns a container with the new text attributes.

```swift
let transformer = UIConfigurationTextAttributesTransformer { incoming in
    var outgoing = incoming
    outgoing.foregroundColor = UIColor.black
    outgoing.font = UIFont.boldSystemFont(ofSize: 20)
    return outgoing
}
```

## Topics

### Creating a text attributes transformer

- [init(\_:)](uiconfigurationtextattributestransformer-swift.struct/init%28__%29.md): Creates a new text attributes transformer.

### Defining a text transformation

- [transform](uiconfigurationtextattributestransformer-swift.struct/transform.md): A closure that defines the text transformation.

### Calling a text transformer

- [callAsFunction(\_:)](uiconfigurationtextattributestransformer-swift.struct/callasfunction%28__%29.md): Calls the transform closure of the text attributes transformer.
