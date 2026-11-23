> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpbarbuttonproviding/trailingnavigationbarbuttons

# trailingNavigationBarButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Additional buttons to display at the trailing edge of the navigation bar.

## Declaration

```swift
var trailingNavigationBarButtons: [CPBarButton] { get set }
```

<a id="discussion"></a>

## Discussion

Add no more than two buttons to this property. If you specify more than two buttons, CarPlay displays the first two in the array and ignores the rest. In CarPlay template implementations, the default value of this property is an empty array.

## See Also

### Providing navigation bar buttons

- [backButton](backbutton.md): A button you use to implement custom transitions.
- [leadingNavigationBarButtons](leadingnavigationbarbuttons.md): Additional buttons to display at the leading edge of the navigation bar.
- [CPBarButton](../cpbarbutton.md): A button that appears in a navigation bar.
- [CPMessageComposeBarButton](../cpmessagecomposebarbutton.md): A button that activates Siri and initiates the process for composing a message.

# trailingNavigationBarButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Additional buttons to display at the trailing edge of the navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<CPBarButton *> * trailingNavigationBarButtons;
```

<a id="discussion"></a>

## Discussion

Add no more than two buttons to this property. If you specify more than two buttons, CarPlay displays the first two in the array and ignores the rest. In CarPlay template implementations, the default value of this property is an empty array.

## See Also

### Providing navigation bar buttons

- [backButton](backbutton.md): A button you use to implement custom transitions.
- [leadingNavigationBarButtons](leadingnavigationbarbuttons.md): Additional buttons to display at the leading edge of the navigation bar.
- [CPBarButton](../cpbarbutton.md): A button that appears in a navigation bar.
- [CPMessageComposeBarButton](../cpmessagecomposebarbutton.md): A button that activates Siri and initiates the process for composing a message.
