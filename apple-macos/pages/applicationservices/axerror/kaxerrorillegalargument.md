> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axerror/kaxerrorillegalargument](https://developer.apple.com/documentation/applicationservices/axerror/kaxerrorillegalargument)

# kAXErrorIllegalArgument

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.2+

The value received in this event is an invalid value for this attribute. This also applies for invalid parameters in parameterized attributes.

## Declaration

```objectivec
kAXErrorIllegalArgument = -25201
```

## See Also

### Result Codes

- [kAXErrorInvalidUIElement](kaxerrorinvaliduielement.md): The accessibility object received in this event is invalid.
- [kAXErrorInvalidUIElementObserver](kaxerrorinvaliduielementobserver.md): The observer for the accessibility object received in this event is invalid.
- [kAXErrorCannotComplete](kaxerrorcannotcomplete.md): A fundamental error has occurred, such as a failure to allocate memory during processing.
- [kAXErrorAttributeUnsupported](kaxerrorattributeunsupported.md): The referenced attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.
- [kAXErrorActionUnsupported](kaxerroractionunsupported.md): The referenced action is not supported. Alternatively, you can return the `eventNotHandledErr` error.
- [kAXErrorAPIDisabled](kaxerrorapidisabled.md): Assistive applications are not enabled in System Preferences.
- [kAXErrorParameterizedAttributeUnsupported](kaxerrorparameterizedattributeunsupported.md): The parameterized attribute is not supported. Alternatively, you can return the `eventNotHandledErr` error.
