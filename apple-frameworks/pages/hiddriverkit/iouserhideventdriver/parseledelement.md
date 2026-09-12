> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/parseledelement](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/parseledelement)

# parseLEDElement

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Parses an element to see if it supports LED usages.

## Declaration

```objectivec
virtual bool parseLEDElement(IOHIDElement *element);
```

## Parameters

- `element`: An `IOHIDElement` object to parse.

<a id="return-value"></a>

## Return Value

`true` on success, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This method checks the element to determine if it contains LED data suitable for dispatching in an event. If it does, the method stores a reference to the element for later use. When the driver object receives subsequent reports from the device, it uses the information in the stored LED elements to dispatch LED-specific events.

## See Also

### Parsing the Element Hierarchy

- [parseElements](parseelements.md): Parses the specified array of elements.
- [parsePointerElement](parsepointerelement.md): Parses an element to see if it supports pointer usages.
- [parseDigitizerElement](parsedigitizerelement.md): Parses an element to see if it supports digitizer usages.
- [parseKeyboardElement](parsekeyboardelement.md): Parses an element to see if it contains keyboard-related information.
- [parseScrollElement](parsescrollelement.md): Parses an element to see if it supports scroll usages.
