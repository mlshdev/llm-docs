> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/url](https://developer.apple.com/documentation/appkit/nssavepanel/url)

# url (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A URL that contains the fully specified location of the targeted file.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The [NSOpenPanel](../nsopenpanel.md) subclass sets this property to `nil` when the selection contains multiple items.

# URL (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A URL that contains the fully specified location of the targeted file.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

The [NSOpenPanel](../nsopenpanel.md) subclass sets this property to `nil` when the selection contains multiple items.
