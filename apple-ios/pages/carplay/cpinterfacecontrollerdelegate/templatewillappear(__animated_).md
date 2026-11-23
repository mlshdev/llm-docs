> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatewillappear(_:animated:)

# templateWillAppear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller is about to show the specified template in your interface.

## Declaration

```swift
optional func templateWillAppear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `aTemplate`: The template that’s about to appear.
- `animated`: `true` if the system animates the appearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method before making the template’s content visible in your app’s interface. Use this method to perform additional tasks before the template’s appearance.

## See Also

### Handling display-related events

- [templateDidAppear(\_:animated:)](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear(\_:animated:)](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear(\_:animated:)](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.

# templateWillAppear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller is about to show the specified template in your interface.

## Declaration

```objectivec
- (void) templateWillAppear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `aTemplate`: The template that’s about to appear.
- `animated`: `true` if the system animates the appearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method before making the template’s content visible in your app’s interface. Use this method to perform additional tasks before the template’s appearance.

## See Also

### Handling display-related events

- [templateDidAppear:animated:](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateWillDisappear:animated:](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear:animated:](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.
