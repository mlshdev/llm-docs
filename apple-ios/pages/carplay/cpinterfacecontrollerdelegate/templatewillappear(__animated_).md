> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontrollerdelegate/templatewillappear(_:animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatewillappear(_:animated:))

# templateWillAppear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the template will appear onscreen.

## Declaration

```swift
optional func templateWillAppear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `animated`: A Boolean value indicating whether the system animates the presentation of the template.

## See Also

### Handling Display Events

- [templateDidAppear(\_:animated:)](templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateWillDisappear(\_:animated:)](templatewilldisappear%28__animated_%29.md): Tells the delegate that the template will disappear from the screen.
- [templateDidDisappear(\_:animated:)](templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.

# templateWillAppear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the template will appear onscreen.

## Declaration

```objectivec
- (void) templateWillAppear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value indicating whether the system animates the presentation of the template.

## See Also

### Handling Display Events

- [templateDidAppear:animated:](templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateWillDisappear:animated:](templatewilldisappear%28__animated_%29.md): Tells the delegate that the template will disappear from the screen.
- [templateDidDisappear:animated:](templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.
