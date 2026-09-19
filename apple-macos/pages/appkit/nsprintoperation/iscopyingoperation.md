> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsprintoperation/iscopyingoperation

# isCopyingOperation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the print operation is an EPS or PDF copy operation.

## Declaration

```swift
var isCopyingOperation: Bool { get }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is an EPS or PDF copy operation; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# copyingOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the print operation is an EPS or PDF copy operation.

## Declaration

```objectivec
@property (readonly, getter=isCopyingOperation) BOOL copyingOperation;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is an EPS or PDF copy operation; otherwise, [false](https://developer.apple.com/documentation/swift/false).
