> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axerror/kaxerrorattributeunsupported](https://developer.apple.com/documentation/applicationservices/axerror/kaxerrorattributeunsupported)

# kAXErrorAttributeUnsupported

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.2+

The referenced attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.

## Declaration

```objectivec
kAXErrorAttributeUnsupported = -25205
```

## See Also

### Result Codes

- [kAXErrorIllegalArgument](kaxerrorillegalargument.md): The value received in this event is an invalid value for this attribute. This also applies for invalid parameters in parameterized attributes.
- [kAXErrorInvalidUIElement](kaxerrorinvaliduielement.md): The accessibility object received in this event is invalid.
- [kAXErrorInvalidUIElementObserver](kaxerrorinvaliduielementobserver.md): The observer for the accessibility object received in this event is invalid.
- [kAXErrorCannotComplete](kaxerrorcannotcomplete.md): A fundamental error has occurred, such as a failure to allocate memory during processing.
- [kAXErrorActionUnsupported](kaxerroractionunsupported.md): The referenced action is not supported. Alternatively, you can return the `eventNotHandledErr` error.
- [kAXErrorAPIDisabled](kaxerrorapidisabled.md): Assistive applications are not enabled in System Preferences.
- [kAXErrorParameterizedAttributeUnsupported](kaxerrorparameterizedattributeunsupported.md): The parameterized attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.
