> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingbutton/isenabled

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the button is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay draws the button with an enabled appearance and reports interactions to the handler you provided at initialization time. When the value of this property is `false`, CarPlay draws the button with a dimmed appearance and doesn’t report interactions. The default value of this property is `true`.

## See Also

### Managing the button state

- [isSelected](isselected.md): A Boolean value that indicates the selected state of a custom button.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A Boolean value that indicates whether the button is enabled.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay draws the button with an enabled appearance and reports interactions to the handler you provided at initialization time. When the value of this property is `false`, CarPlay draws the button with a dimmed appearance and doesn’t report interactions. The default value of this property is `true`.

## See Also

### Managing the button state

- [selected](isselected.md): A Boolean value that indicates the selected state of a custom button.
