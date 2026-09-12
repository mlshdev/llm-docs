> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/parsedigitizerelement](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/parsedigitizerelement)

# parseDigitizerElement

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Parses an element to see if it supports digitizer usages.

## Declaration

```objectivec
virtual bool parseDigitizerElement(IOHIDElement *element);
```

## Parameters

- `element`: An `IOHIDElement` object to parse.

<a id="return-value"></a>

## Return Value

`true` on success, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This method checks the element to determine if it contains digitizer data suitable for dispatching in an event. If it does, the method stores a reference to the element for later use. When the driver object receives subsequent reports from the device, it uses the information in the stored digitizer elements to dispatch digitizer-specific events.

## See Also

### Parsing the Element Hierarchy

- [parseElements](parseelements.md): Parses the specified array of elements.
- [parsePointerElement](parsepointerelement.md): Parses an element to see if it supports pointer usages.
- [parseKeyboardElement](parsekeyboardelement.md): Parses an element to see if it contains keyboard-related information.
- [parseScrollElement](parsescrollelement.md): Parses an element to see if it supports scroll usages.
- [parseLEDElement](parseledelement.md): Parses an element to see if it supports LED usages.
