> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem/isenabled

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the item supports interactions.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the item is enabled and supports interactions. Set the value to `false` to disable interactions. The default value of this property is `true`.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether the item supports interactions.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, the item is enabled and supports interactions. Set the value to `false` to disable interactions. The default value of this property is `true`.
