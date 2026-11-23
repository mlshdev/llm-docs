> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplateitem/isenabled

# isEnabled (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether the item is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay displays the item normally and allows interactions to occur. When the value of this property is `false`, CarPlay displays the item with a dimmed appearance and doesn’t allow interactions. The default value of this property is `true`.

# enabled (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether the item is enabled.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, CarPlay displays the item normally and allows interactions to occur. When the value of this property is `false`, CarPlay displays the item with a dimmed appearance and doesn’t allow interactions. The default value of this property is `true`.
