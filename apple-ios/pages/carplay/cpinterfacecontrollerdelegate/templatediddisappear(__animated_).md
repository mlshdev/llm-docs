> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatediddisappear(_:animated:)

# templateDidDisappear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller removed the specified template from your interface.

## Declaration

```swift
optional func templateDidDisappear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `aTemplate`: The template that disappeared.
- `animated`: `true` if the system animated the disappearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method shortly after removing `aTemplate` from your app’s interface. If `animated` is `true`, this method runs after the animations finish. Use this method to perform additional tasks after the template disappears

## See Also

### Handling display-related events

- [templateWillAppear(\_:animated:)](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear(\_:animated:)](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear(\_:animated:)](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.

# templateDidDisappear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller removed the specified template from your interface.

## Declaration

```objectivec
- (void) templateDidDisappear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `aTemplate`: The template that disappeared.
- `animated`: `true` if the system animated the disappearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method shortly after removing `aTemplate` from your app’s interface. If `animated` is `true`, this method runs after the animations finish. Use this method to perform additional tasks after the template disappears

## See Also

### Handling display-related events

- [templateWillAppear:animated:](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear:animated:](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear:animated:](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
