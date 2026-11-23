> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/isenabled

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

The default value of this property is `true`. Set the property to `false` to disable the item in your list interface. CarPlay doesn’t report interactions with disabled items and changes their appearance to reflect their disabled state.

## See Also

### Responding to interactions

- [handler](handler.md): The closure to run when someone interacts with any part of the list item.

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

The default value of this property is `true`. Set the property to `false` to disable the item in your list interface. CarPlay doesn’t report interactions with disabled items and changes their appearance to reflect their disabled state.

## See Also

### Responding to interactions

- [handler](handler.md): The closure to run when someone interacts with any part of the list item.
