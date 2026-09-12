> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/keyequivalent](https://developer.apple.com/documentation/appkit/nscell/keyequivalent)

# keyEquivalent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key equivalent associated with clicking the cell.

## Declaration

```swift
var keyEquivalent: String { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this property and return a string with a valid character for the key equivalent. The default implementation of this property returns an empty string.

# keyEquivalent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key equivalent associated with clicking the cell.

## Declaration

```objectivec
@property (copy, readonly) NSString * keyEquivalent;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override this property and return a string with a valid character for the key equivalent. The default implementation of this property returns an empty string.
