> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/preservesselection](https://developer.apple.com/documentation/appkit/nsarraycontroller/preservesselection)

# preservesSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes

## Declaration

```swift
var preservesSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Selection Attributes

- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

# preservesSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes

## Declaration

```objectivec
@property BOOL preservesSelection;
```

<a id="Discussion"></a>

## Discussion

The default is [true](https://developer.apple.com/documentation/swift/true). This property is observable using key-value observing.

## See Also

### Selection Attributes

- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [alwaysUsesMultipleValuesMarker](alwaysusesmultiplevaluesmarker.md): A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected
