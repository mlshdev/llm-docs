> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontrollerdelegate/templatewilldisappear(_:animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontrollerdelegate/templatewilldisappear(_:animated:))

# templateWillDisappear(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the template will disappear from the screen.

## Declaration

```swift
optional func templateWillDisappear(_ aTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `animated`: A Boolean value indicating whether the system animates the disappearance of the template.

## See Also

### Handling Display Events

- [templateWillAppear(\_:animated:)](templatewillappear%28__animated_%29.md): Tells the delegate that the template will appear onscreen.
- [templateDidAppear(\_:animated:)](templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateDidDisappear(\_:animated:)](templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.

# templateWillDisappear:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the template will disappear from the screen.

## Declaration

```objectivec
- (void) templateWillDisappear:(CPTemplate *) aTemplate animated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value indicating whether the system animates the disappearance of the template.

## See Also

### Handling Display Events

- [templateWillAppear:animated:](templatewillappear%28__animated_%29.md): Tells the delegate that the template will appear onscreen.
- [templateDidAppear:animated:](templatedidappear%28__animated_%29.md): Tells the delegate that the template did appear onscreen.
- [templateDidDisappear:animated:](templatediddisappear%28__animated_%29.md): Tells the delegate that the template did disappear from the screen.
