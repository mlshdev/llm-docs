> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatewilldisappear(_:animated:)

# templateWillDisappear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller is about to remove the specified template in your interface.

## Declaration

```swift
optional func templateWillDisappear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `aTemplate`: The template that’s about to disappear.
- `animated`: `true` if the system animates the disappearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method before removing `aTemplate` from your app’s interface. Use this method to perform additional tasks before the template’s disappears.

## See Also

### Handling display-related events

- [templateWillAppear(\_:animated:)](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear(\_:animated:)](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateDidDisappear(\_:animated:)](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.

# templateWillDisappear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller is about to remove the specified template in your interface.

## Declaration

```objectivec
- (void) templateWillDisappear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `aTemplate`: The template that’s about to disappear.
- `animated`: `true` if the system animates the disappearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method before removing `aTemplate` from your app’s interface. Use this method to perform additional tasks before the template’s disappears.

## See Also

### Handling display-related events

- [templateWillAppear:animated:](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateDidAppear:animated:](templatedidappear%28__animated_%29.md): Tells the delegate that the controller showed the specified template in your interface.
- [templateDidDisappear:animated:](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.
