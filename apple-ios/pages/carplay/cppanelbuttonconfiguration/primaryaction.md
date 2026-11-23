> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration/primaryaction

# primaryAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The primary action button for the panel.

## Declaration

```swift
@NSCopying var primaryAction: CPTextButton { get }
```

<a id="discussion"></a>

## Discussion

Specify the button at initialization time and use this property to retrieve it later.

## See Also

### Getting the action buttons

- [secondaryAction](secondaryaction.md): An optional action button to display in the panel.

# primaryAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The primary action button for the panel.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CPTextButton * primaryAction;
```

<a id="discussion"></a>

## Discussion

Specify the button at initialization time and use this property to retrieve it later.

## See Also

### Getting the action buttons

- [secondaryAction](secondaryaction.md): An optional action button to display in the panel.
