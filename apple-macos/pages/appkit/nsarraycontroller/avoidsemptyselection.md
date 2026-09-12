> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/avoidsemptyselection](https://developer.apple.com/documentation/appkit/nsarraycontroller/avoidsemptyselection)

# avoidsEmptySelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection

## Declaration

```swift
var avoidsEmptySelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Selection Attributes

- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

# avoidsEmptySelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection

## Declaration

```objectivec
@property BOOL avoidsEmptySelection;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Selection Attributes

- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected
