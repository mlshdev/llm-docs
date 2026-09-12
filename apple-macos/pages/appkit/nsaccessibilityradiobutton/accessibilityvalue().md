> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityradiobutton/accessibilityvalue()](https://developer.apple.com/documentation/appkit/nsaccessibilityradiobutton/accessibilityvalue())

# accessibilityValue() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the radio button’s value.

## Declaration

```swift
func accessibilityValue() -> NSNumber?
```

<a id="return-value"></a>

## Return Value

`@YES` if selected; otherwise, `@NO`.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md) property.

> **Note**

>  This class must also post an [valueChanged](../nsaccessibility-swift.struct/notification/valuechanged.md) notification whenever its value changes.

# accessibilityValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the radio button’s value.

## Declaration

```objectivec
- (NSNumber *) accessibilityValue;
```

<a id="return-value"></a>

## Return Value

`@YES` if selected; otherwise, `@NO`.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md) property.

> **Note**

>  This class must also post an [NSAccessibilityValueChangedNotification](../nsaccessibility-swift.struct/notification/valuechanged.md) notification whenever its value changes.

## See Also

### Related Documentation

- [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md): The accessibility element’s value.
