> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/parsekeyboardelement](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/parsekeyboardelement)

# parseKeyboardElement

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Parses an element to see if it contains keyboard-related information.

## Declaration

```objectivec
virtual bool parseKeyboardElement(IOHIDElement *element);
```

## Parameters

- `element`: An `IOHIDElement` object to check.

<a id="return-value"></a>

## Return Value

`true` if the element contains relevant keyboard information, or `false` if it doesn’t.

<a id="Discussion"></a>

## Discussion

This method checks the element to determine if it contains keyboard data suitable for dispatching in an event. If it does, the method stores a reference to the element for later use. When the driver object receives subsequent reports from the device, it uses the information in the stored keyboard elements to dispatch keyboard-specific events.

## See Also

### Parsing the Element Hierarchy

- [parseElements](parseelements.md): Parses the specified array of elements.
- [parsePointerElement](parsepointerelement.md): Parses an element to see if it supports pointer usages.
- [parseDigitizerElement](parsedigitizerelement.md): Parses an element to see if it supports digitizer usages.
- [parseScrollElement](parsescrollelement.md): Parses an element to see if it supports scroll usages.
- [parseLEDElement](parseledelement.md): Parses an element to see if it supports LED usages.
