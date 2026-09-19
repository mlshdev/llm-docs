> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextelementprovider/documentrange

# documentRange (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Describes the starting and ending locations for the document.

## Declaration

```swift
var documentRange: NSTextRange { get }
```

<a id="Discussion"></a>

## Discussion

The subclass could use its own implementation of a location object conforming to [NSTextRange](../nstextrange.md).

# documentRange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Describes the starting and ending locations for the document.

## Declaration

```objectivec
@property (strong, readonly) NSTextRange * documentRange;
```

<a id="Discussion"></a>

## Discussion

The subclass could use its own implementation of a location object conforming to [NSTextRange](../nstextrange.md).
