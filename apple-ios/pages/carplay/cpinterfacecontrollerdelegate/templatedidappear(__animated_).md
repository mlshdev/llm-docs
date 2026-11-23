> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatedidappear(_:animated:)

# templateDidAppear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller showed the specified template in your interface.

## Declaration

```swift
optional func templateDidAppear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `aTemplate`: The template that appeared.
- `animated`: `true` if the system animates the appearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method shortly after the template becomes fully visible in your app’s interface. If `animated` is `true`, this method runs after the animations finish. Use this method to perform additional tasks after the template appears.

## See Also

### Handling display-related events

- [templateWillAppear(\_:animated:)](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateWillDisappear(\_:animated:)](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear(\_:animated:)](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.

# templateDidAppear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the controller showed the specified template in your interface.

## Declaration

```objectivec
- (void) templateDidAppear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `aTemplate`: The template that appeared.
- `animated`: `true` if the system animates the appearance of the template.

<a id="discussion"></a>

## Discussion

The interface controller calls this method shortly after the template becomes fully visible in your app’s interface. If `animated` is `true`, this method runs after the animations finish. Use this method to perform additional tasks after the template appears.

## See Also

### Handling display-related events

- [templateWillAppear:animated:](templatewillappear%28__animated_%29.md): Tells the delegate that the controller is about to show the specified template in your interface.
- [templateWillDisappear:animated:](templatewilldisappear%28__animated_%29.md): Tells the delegate that the controller is about to remove the specified template in your interface.
- [templateDidDisappear:animated:](templatediddisappear%28__animated_%29.md): Tells the delegate that the controller removed the specified template from your interface.
