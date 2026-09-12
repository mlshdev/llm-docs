> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axerror/cannotcomplete](https://developer.apple.com/documentation/applicationservices/axerror/cannotcomplete)

# AXError.cannotComplete

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.2+

A fundamental error has occurred, such as a failure to allocate memory during processing.

## Declaration

```swift
case cannotComplete = -25204
```

## See Also

### Result Codes

- [AXError.illegalArgument](illegalargument.md): The value received in this event is an invalid value for this attribute. This also applies for invalid parameters in parameterized attributes.
- [AXError.invalidUIElement](invaliduielement.md): The accessibility object received in this event is invalid.
- [AXError.invalidUIElementObserver](invaliduielementobserver.md): The observer for the accessibility object received in this event is invalid.
- [AXError.attributeUnsupported](attributeunsupported.md): The referenced attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.
- [AXError.actionUnsupported](actionunsupported.md): The referenced action is not supported. Alternatively, you can return the `eventNotHandledErr` error.
- [AXError.apiDisabled](apidisabled.md): Assistive applications are not enabled in System Preferences.
- [AXError.parameterizedAttributeUnsupported](parameterizedattributeunsupported.md): The parameterized attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.
