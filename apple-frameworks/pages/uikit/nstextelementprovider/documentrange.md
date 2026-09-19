> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextelementprovider/documentrange

# documentRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Describes the starting and ending locations for the document.

## Declaration

```swift
var documentRange: NSTextRange { get }
```

<a id="Discussion"></a>

## Discussion

The subclass could use its own implementation of a location object conforming to [NSTextRange](../nstextrange.md).

# documentRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Describes the starting and ending locations for the document.

## Declaration

```objectivec
@property (strong, readonly) NSTextRange * documentRange;
```

<a id="Discussion"></a>

## Discussion

The subclass could use its own implementation of a location object conforming to [NSTextRange](../nstextrange.md).
