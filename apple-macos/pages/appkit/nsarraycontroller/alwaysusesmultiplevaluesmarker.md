> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/alwaysusesmultiplevaluesmarker](https://developer.apple.com/documentation/appkit/nsarraycontroller/alwaysusesmultiplevaluesmarker)

# alwaysUsesMultipleValuesMarker (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

## Declaration

```swift
var alwaysUsesMultipleValuesMarker: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Setting to [true](https://developer.apple.com/documentation/swift/true) can increase performance if your application doesn’t allow editing multiple values. This property is observable using key-value observing.

## See Also

### Selection Attributes

- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes

# alwaysUsesMultipleValuesMarker (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver always returns the multiple values marker when multiple objects are selected

## Declaration

```objectivec
@property BOOL alwaysUsesMultipleValuesMarker;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). Setting to [true](https://developer.apple.com/documentation/swift/true) can increase performance if your application doesn’t allow editing multiple values. This property is observable using key-value observing.

## See Also

### Selection Attributes

- [avoidsEmptySelection](avoidsemptyselection.md): A Boolean value that indicates whether the receiver requires that the content array attempt to maintain a selection
- [preservesSelection](preservesselection.md): A Boolean value that indicates whether the receiver will attempt to preserve the current selection when the content changes
