> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem/showsbottomseparator

# showsBottomSeparator (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether a separator line appears at the bottom edge of the item.

## Declaration

```swift
var showsBottomSeparator: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay draws a line along the bottom edge of the item to separate it from the next item. Set this property to `false` if you don’t want to draw the separator. The default value of this property is `true`.

When drawing the last section in the map panel, the system doesn’t draw a separator line, even if this property is `true`.

# showsBottomSeparator (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether a separator line appears at the bottom edge of the item.

## Declaration

```objectivec
@property (nonatomic) BOOL showsBottomSeparator;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay draws a line along the bottom edge of the item to separate it from the next item. Set this property to `false` if you don’t want to draw the separator. The default value of this property is `true`.

When drawing the last section in the map panel, the system doesn’t draw a separator line, even if this property is `true`.
