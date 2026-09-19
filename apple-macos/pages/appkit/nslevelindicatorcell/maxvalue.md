> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nslevelindicatorcell/maxvalue

# maxValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value of the control.

## Declaration

```swift
var maxValue: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum value is dependent on the style of the control. For continuous styles, the default value of this property is `100.0`. For discrete styles, the default maximum value is `5.0`.

## See Also

### Configuring the Range of Values

- [minValue](minvalue.md): The minimum value of the control.
- [levelIndicatorStyle](levelindicatorstyle.md): The style of the level indicator control.
- [warningValue](warningvalue.md): The warning value of the level indicator control.
- [criticalValue](criticalvalue.md): The critical value of the level indicator control.

# maxValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum value of the control.

## Declaration

```objectivec
@property double maxValue;
```

<a id="Discussion"></a>

## Discussion

The maximum value is dependent on the style of the control. For continuous styles, the default value of this property is `100.0`. For discrete styles, the default maximum value is `5.0`.

## See Also

### Configuring the Range of Values

- [minValue](minvalue.md): The minimum value of the control.
- [levelIndicatorStyle](levelindicatorstyle.md): The style of the level indicator control.
- [warningValue](warningvalue.md): The warning value of the level indicator control.
- [criticalValue](criticalvalue.md): The critical value of the level indicator control.
